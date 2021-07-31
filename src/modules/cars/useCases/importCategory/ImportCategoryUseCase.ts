import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute(file: any) {
    console.log(file);
  }
}

export { ImportCategoryUseCase };