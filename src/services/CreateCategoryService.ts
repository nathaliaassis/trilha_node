import { ICategoriesRepository } from "../modules/cars/repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
//regras de negócio da criação de uma categoria
// as rotas não devem tratar condições, então criamos uma camada de serviço para 
// tratar isso,
// assim como, os services não devem retornar response e sim Error
class CreateCategoryService {
  // no meu constructor recebo o repositorio
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists.");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };