
import { TablesSessionsController } from "@/controllers/tables-sessions-controller";
import { Router } from "express";

const tablesSessionsRoutes = Router()
const tableSessionsController =  new TablesSessionsController()

tablesSessionsRoutes.get("/", tableSessionsController.index)
tablesSessionsRoutes.post("/", tableSessionsController.create)
// tablesRoutes.put("/:id", tablesController.update)
// tablesRoutes.delete("/:id", tablesController.remove)


export {tablesSessionsRoutes}