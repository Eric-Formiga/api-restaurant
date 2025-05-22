
import { OrdersController } from "@/controllers/orders-controller"; 
import { Router } from "express";

const OrdersRoutes = Router()
const ordersController =  new OrdersController()

OrdersRoutes.post("/", ordersController.create)
//OrdersRoutes.get("/", ordersController.index)
//OrdersRoutes.patch("/:id", ordersController.update)
// OrdersRoutes.delete("/:id", tablesController.remove)


export {OrdersRoutes}