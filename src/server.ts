import express from 'express';
import routes from './routes';
import './database'

const app = express()
app.use(express.json())

app.use(routes)

app.get('/', (req, res)=>{
    return res.send({ response: "Hello Juridico! Em typescript!"})
});

app.listen(3000, ()=>{
    console.log('Server Started Port 3000')
})