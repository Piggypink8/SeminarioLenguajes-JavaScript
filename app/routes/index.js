import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  console.log(req)
  res.send('Hello World!')
})

router.post('/', (req, res) => {
  console.log(req)
  res.send('Request POST')
})

router.put('/', (req, res) => {
  res.send('Request PUT')
})

router.delete('/', (req, res) => {
  console.log(req)
  res.send('Request DELETE')
})

export default router
