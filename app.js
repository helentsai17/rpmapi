const express = require('express')

const {sequelize, Speed, Nonin, Exercise} = require('./models')

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

app.get( '/rpm/:id' ,async (req, res) =>{
    const machineId = req.params.id
    try{
        const latest = await Speed.findOne({
            where:{ machineId : machineId },
            order: [ [ 'id', 'DESC' ]],
            });
        return res.json(latest.rpm)

    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Something went wrong'})
    }
})

app.post('/nonin', async(req, res) =>{
    const { machineId, heart_rate, spo2, time } = req.body

    try{
        const noninvalue =  await Nonin.create({machineId, heart_rate, spo2, time})

        return res.json(noninvalue)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})


app.get( '/nonin' ,async (req, res) =>{
    try{
        const latest = await Nonin.findOne({
            order: [ [ 'id', 'DESC' ]],
            });
        return res.json(latest)

    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Something went wrong from the nonin data'})
    }
})

app.get( '/nonin/:id' ,async (req, res) =>{
    const machineId = req.params.id
    try{
        const latest = await Nonin.findOne({
            where:{machineId : machineId},
            order: [ [ 'id', 'DESC' ]],
            });
        return res.json(latest)

    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Something went wrong from the nonin data'})
    }
})

app.post('/exercise', async(req, res) =>{
    const { userId, machineId, data, survey_data } = req.body

    try{
        const ExerciseDataSet =  await Exercise.create({ userId, machineId, data, survey_data})

        return res.json(ExerciseDataSet)
    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Something went wrong from pushing the Ecercise data'})
    }
})


app.get( '/exercise' ,async (req, res) =>{
    try{
        const latest = await Exercise.findOne({
            order: [ [ 'id', 'DESC' ]],
            });
        return res.json(latest)

    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Something went wrong from geting the Ecercise data'})
    }
})

app.get( '/exercise/:id' ,async (req, res) =>{
    const machineId = req.params.id
    try{
        const latest = await Exercise.findOne({
            where:{machineId : machineId},
            order: [ [ 'id', 'DESC' ]],
            });
        return res.json(latest)

    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Something went wrong from geting the Exercise data by id'})
    }
})


app.get( '/userExercise/:id' ,async (req, res) =>{
    const userId = req.params.id
    try{
        const latest = await Exercise.findAll({
            where:{userId : userId}
            });
        return res.json(latest)

    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Something went wrong from geting user Exercise data'})
    }
})

app.listen({port:5000}, async () =>{
    console.log('Server up on http://localhost:5000')
    await sequelize.authenticate()
    console.log('Database Connected!')
})