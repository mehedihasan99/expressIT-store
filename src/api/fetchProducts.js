export default async function handler(req, res) {
  try {
    const response = await fetch(import.meta.env.VITE_API_PRODUCT_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }

    const data = await response.json()

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' })
  }
}
