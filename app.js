const express = require('express')

const {sequelize, Speed} = require('./models')

const app = express()
app.use(express.json())

app.post('/rpm', async(req, res) =>{
    const { rpm, machineId, time } = req.body

    try{
        const rpmvalue =  await Speed.create({rpm, machineId, time})

        return res.json(rpmvalue)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.get( '/rpm' ,async (req, res) =>{
    try{
        const latest = await Speed.findOne({
            order: [ [ 'id', 'DESC' ]],
            });
        return res.json(latest.rpm)

    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Something went wrong'})
    }
})

app.listen({port:5000}, async () =>{
    console.log('Server up on http://localhost:5000')
    await sequelize.authenticate()
    console.log('Database Connected!')
})