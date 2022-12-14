import { API_URL } from "../../../../config/index"
import cookie from "cookie"

export default async (req, res) => {
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? "")
        const access = cookies.access ?? false

        if (access === false) 
            return res.status(401).json({error: "User is not authorized to make this request!"})

        try {
            const apiRes = await fetch(`${API_URL}/api/v1/users/me`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${access}`
                },
            })

            const data = await apiRes.json()
            if (apiRes.status === 200) return res.status(200).json({user: data})
            else return res.status(apiRes.status).json({error: data.error})
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