const express = require('express') // Buscamos a biblioteca do Express
const app = express()

/**
 * Criamos o GET da Raiz
 */
app.get('/', (req, res)=>{
    res.send({ response: "Hello Juridico! Como estão hoje?"})
})

/**
 * Colocamos o express para escutar a porta 3000
 */
app.listen(3000, ()=>{
    console.log("App escutando a porta 3000!")
})