import { AppError } from "@/utils/AppError";
import { NextFunction, Request, Response } from "express";
import { z } from "zod"
import { knex } from "@/database/knex";

class TablesSessionsController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      // const tables = await knex<TableRepository>("tables").select().orderBy("table_number")

      // return response.json(tables)
      return response.status(201).json()

    } catch (error) {
      next(error)
    }
  }
}

export { TablesSessionsController }