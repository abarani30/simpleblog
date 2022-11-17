import { API_URL } from "../../../../config/index"

export default async (req, res) => {
    if (req.method === 'POST') {
        let body = req.body
        try {
            const apiRes = await fetch(`${API_URL}/api/v1/users/register`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })

            const data = await apiRes.json()
            
            if (apiRes.status === 201) return res.status(201).json({success: data.success})
            else {
                console.log(apiRes.status, data.error)
                return res.status(apiRes.status).json({error: data.error})
            }
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