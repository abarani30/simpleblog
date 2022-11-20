import { API_URL } from "../../../../config/index"
import cookie from "cookie"

export default async (req, res) => {
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? "")
        const access = cookies.access ?? false

        if (access === false) 
            return res.status(401).json({error: "User is not authorized to make this request!"})

        try {
            const apiRes = await fetch(`${API_URL}/api/token/verify/`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({token: access})
            })

            if (apiRes.status === 200) return res.status(200).json({success: true})
            else return res.status(apiRes.status).json({error: "Unable to verify the user!"})
        }
        
        catch(err) {
            return res.status(500).json({error: err})
        }
    }
    else{
        res.setHeader('Allow', ['GET'])
        return res.status(405).json({error: `Method ${req.method} not allowed` })
    }
} 