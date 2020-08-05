import express = require("express")

import {Application,Router} from 'express'

interface AppConfigShape {
    middlewares?:any[] | undefined
    routes?:Router[] | undefined
}

interface AppShape {
    app:Application;
    listen(portNumber:number,feedBack?:() => void | undefined):void;
}

class App implements AppShape {
    public app:Application

    constructor({middlewares,routes}:AppConfigShape){

        this.app = express()

        this.useMiddlewares(middlewares)
        this.useRoutes(routes)

    }

    private useMiddlewares(listMiddleware:any[] | undefined){
        if(!listMiddleware?.length){
            return false
        }

        listMiddleware.forEach(middleware => {
            this.app.use(middleware)
        })
    }

    private useRoutes(routes:Router[] | undefined){
        if(!routes?.length){
            return false
        }

        routes.forEach(route => {
            this.app.use(route)
        })
    }

    public listen(portNumber:number,feedBack?:()=>void | undefined){
        this.app.listen(portNumber,feedBack)
    }
}

export default App