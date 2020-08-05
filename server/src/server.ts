import App from './app'

//middlewares
import { json } from 'express'
import cors from 'cors'

// routes
import classes from './routes/class'
import connections from './routes/connection'

const SERVER_PORT = 3333

const server = new App({

    middlewares:[
        json(),
        cors(),
    ],
    
    routes:[
        classes,
        connections,
    ]

})

server.listen(SERVER_PORT,() => {
    console.log(`⚡️ [server]: Server is running at https://localhost:${SERVER_PORT}`)
})

