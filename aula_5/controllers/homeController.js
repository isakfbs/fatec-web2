export default index = (req, res) => {
    res.status(200).render('index',{
        title: "MVN com express",
        message: "Bem vindo à MVC!"
    })
}