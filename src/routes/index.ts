import express from 'express'
import { CustomerRoutesApi } from './customer.routes'
import { OrderRoutesApi } from './order.routes'
import { PizzaRoutesApi } from './pizza.routes'
import { LoginRoutesApi } from './login.routes'

export class MainRouter {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.routes()
    }

    routes() {
        this.router.use('/pizza', PizzaRoutesApi)
        this.router.use('/customer', CustomerRoutesApi)
        this.router.use('/order', OrderRoutesApi)
        this.router.use('/', LoginRoutesApi)
    }
 }
export const MainApi = new MainRouter().router