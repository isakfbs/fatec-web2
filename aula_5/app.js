import express from "express";
import ejs from "ejs";
import homeRoutes from './routes/homeRoutes.js'
const app = express();

const PORT = process.env.PORT || '3000';
const HOST = process.env.HOST || '127.0.0.1';

app.set('view engine','ejs');
app.set('views','./views');

app.use('/home', homeRoutes)

app.get('/', (req,res)=>{
    res.status(200).render('index',{ 
        title: 'Página Inicial', 
        message: 'Bem-vindo ao Express com EJS!' 
    })})

    app.get('/sobre', (req, res) => {
        res.status(200).render('index', 
            { 
                title: 'sobre com Express',
                message: 'Página sobre!' 
            });
    });

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




