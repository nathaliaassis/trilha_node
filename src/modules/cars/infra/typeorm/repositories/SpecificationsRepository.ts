import { getRepository, Repository } from "typeorm";
import { Specification } from "../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "@modules/cars/repositories/ISpecificationsRepository";

/**
 * os repositories são responsáveis por toda manipulação de dados
 * dentro da aplicação
 */

class SpecificationsRespository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description
    })

    await this.repository.save(specification);
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();

    return specifications;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });

    return specification;
  }
}

export { SpecificationsRespository };