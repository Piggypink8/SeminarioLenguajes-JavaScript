import express from 'express'
import usuariosData from '../../data/usuarios.json' assert { type:'json' }

const router = express.Router()

router.get('/', (req, res) => {
    res.render('login')
})

 // post es la manera de atender el request
router.post('/', (req, res) => {
    //const username = req.body.username
    //const password = req.body.password
    //res.send(`username: ${username} password:  ${password}`)
    const { username, password } = req.body;
    let newUser = {
        "id": usuariosData.length + 1,
        "username": username,
        "password": password
    }
    usuariosData.push(newUser)
    res.json(usuariosData)
})

router.delete('/', (req, res) => {
    const { username } = req.body;
    let usuarios = [];
    usuariosData.forEach(usuario => {
        if(usuario.username != username){
            usuarios.push(usuario)
        }
    })
    res.json(usuarios);
})

router.put('/', (req, res) => {
    const { username, newUsername } = req.body;
    usuariosData.forEach(usuario => {
        if(usuario.username == username){
            usuario.username = newUsername;
        }
    })
    res.json(usuariosData)
})
  
export default router
