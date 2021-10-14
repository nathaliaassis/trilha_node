import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
//regras de negócio da criação de uma categoria
// as rotas não devem tratar condições, então criamos uma camada de serviço (Regras de negócio/ caso de uso) para 
// tratar isso,
// assim como os services, não devem retornar response e sim Error
@injectable()
class CreateCategoryUseCase {
  // no meu constructor recebo o repositorio

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists.");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };