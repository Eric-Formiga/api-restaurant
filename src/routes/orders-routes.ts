
import { OrdersController } from "@/controllers/orders-controller"; 
import { Router } from "express";

const OrdersRoutes = Router()
const ordersController =  new OrdersController()

OrdersRoutes.post("/", ordersController.create)
OrdersRoutes.get("/table-session/:table_session_id", ordersController.index)
OrdersRoutes.get("/table-session/:table_session_id/total", ordersController.show)
//OrdersRoutes.patch("/:id", ordersController.update)
// OrdersRoutes.delete("/:id", tablesController.remove)


export {OrdersRoutes}