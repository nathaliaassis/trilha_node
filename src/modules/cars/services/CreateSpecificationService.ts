import { ISpecificationRepository } from "../modules/cars/repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
//regras de negócio da criação de uma especificação
// as rotas não devem tratar condições, então criamos uma camada de serviço para 
// tratar isso,
// assim como, os services não devem retornar response e sim Error
class CreateSpecificationService {
  // no meu constructor recebo o repositorio
  //colocamos o private para a variavel ficar disponivel para toda a classe
  constructor(private specificationsRepository: ISpecificationRepository) { }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists.")
    }

    this.specificationsRepository.create({
      name,
      description
    });
  }
}

export { CreateSpecificationService };