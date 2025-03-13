import express from "express";
import ejs from "ejs";
import homeRoutes from './routes/homeRoutes.js'
const app = express();

const PORT = process.env.PORT || '3000';
const HOST = process.env.HOST || '127.0.0.1';

app.set('view engine','ejs');
app.set('views','./views');

const pessoas = [
    {
        'nome': 'Isak Silva',
        'idade': 27
    },
    {
        'nome': 'Vinicius Mattera',
        'idade': 19,
    },
    {
        'nome': 'Abraão Santos',
        'idade': 23,
    },
]


app.use('/home', homeRoutes)

app.get('/sobre', (req,res)=>{
    res.render('sobre')})

// const rotaAdmin = express.Router();

// rotaAdmin.get('/',(req,res)=>{
//     res.status(200).send('Dashboard admin');
// });

// rotaAdmin.get('/usuarios', (req,res)=>{
//     res.status(200).send("Gerenciamento de Usuários")
// })

// rotaAdmin.get('/xxxx',(req,res)=>{

// res.status(500).json({ nome: 'ISAK', idade:'27'});
// })

app.listen(PORT, () =>{
    console.log(`O servidor está rodando na porta: http://${HOST}:${PORT}`);
})




