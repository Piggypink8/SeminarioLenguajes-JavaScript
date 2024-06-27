import express from 'express'
import usersData from '../../data/users.json' assert { type: 'json' }

const router = express.Router()

router.get('/', async (req, res) => {
  res.json(usersData)
})

/* Es un ejemplo de como devolver un error, éste endpoint no tiene fines prácticos */
router.get('/error', (req, res) => {
  res.status(400).json({
    message: 'Error al solicitar la información',
    error: {
      code: 400,
      description: 'Descripción detallada del error',
    },
  })
})

export default router
