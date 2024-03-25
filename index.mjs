import express from 'express'
import os from 'os'
const app = express()
const port = 3000

app.get('/',(req,res)=>{
        const message = `Hello World, iam pod ${os.hostname()}`
        res.send(message)
})

app.listen(port, ()=>{
	console.log(`Web server is listening at port ${port}`)
	console.log(os.hostname())
})
