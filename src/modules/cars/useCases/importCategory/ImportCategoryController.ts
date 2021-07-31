import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoriesUseCase: ImportCategoryUseCase) { }
  handle(request: Request, response: Response): Response {
    const { file } = request;
    console.log(file);

    return response.send();
  }
}

export { ImportCategoryController };