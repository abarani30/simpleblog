import { API_URL } from "../../../../config/index"
import cookie from "cookie"

export default async (req, res) => {
    if (req.method === 'POST') {
        let body = req.body
        try {
            const apiRes = await fetch(`${API_URL}/api/token/`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })

            const data = await apiRes.json()
            
            if (apiRes.status === 200) {
                res.setHeader('Set-Cookie', [
                    cookie.serialize('access', data.access, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== "development",
                        maxAge: 60 * 30,
                        sameSite: 'strict',
                        path: '/api/'
                    }),
                    cookie.serialize('refresh', data.refresh, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== "development",
                        maxAge: 60 * 60 * 24,
                        sameSite: 'strict',
                        path: '/api/'
                    }),
                ])
                return res.status(200).json({success: "Logged in successfully" })
            }
            else return res.status(apiRes.status).json({error: "Invalid login!"})
        }
        
        catch(err) {
            return res.status(500).json({error: err})
        }
    }
    else{
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({error: `Method ${req.method} not allowed` })
    }
} 