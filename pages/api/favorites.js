import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import { db } from '../../lib/firebase-admin'

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const userId = session.user.id

  if (req.method === 'GET') {
    try {
      const snapshot = await db
        .collection('users')
        .doc(userId)
        .collection('favorites')
        .orderBy('addedAt', 'desc')
        .get()

      const favorites = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      res.status(200).json(favorites)
    } catch (error) {
      res.status(500).json({ error: 'Error fetching favorites' })
    }
  } 
  else if (req.method === 'POST') {
    try {
      const { itemId, type, name, description, image, details } = req.body

      const favoriteRef = db
        .collection('users')
        .doc(userId)
        .collection('favorites')
        .doc(itemId)

      await favoriteRef.set({
        itemId,
        type,
        name,
        description,
        image,
        details,
        addedAt: new Date().toISOString(),
      })

      res.status(200).json({ success: true })
    } catch (error) {
      res.status(500).json({ error: 'Error adding favorite' })
    }
  }
  else if (req.method === 'DELETE') {
    try {
      const { itemId } = req.body

      await db
        .collection('users')
        .doc(userId)
        .collection('favorites')
        .doc(itemId)
        .delete()

      res.status(200).json({ success: true })
    } catch (error) {
      res.status(500).json({ error: 'Error removing favorite' })
    }
  }
  else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}