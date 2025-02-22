// api/product.js
import axios from 'axios'

export default async function handler(req, res) {
  try {
    // Define the API URL for your backend (Vercel)
    const apiUrl = 'https://glore-bd-backend-node-mongo.vercel.app/api/product'

    // Forward the request method and headers
    const response = await axios({
      method: req.method, // 'GET', 'POST', etc.
      url: apiUrl,
      headers: req.headers,
      data: req.body, // In case of POST request, pass the body
    })

    // Return the response from the backend API
    res.status(response.status).json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' })
  }
}
