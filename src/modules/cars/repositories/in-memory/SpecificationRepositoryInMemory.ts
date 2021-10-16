import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationsRepository";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

class SpecificationRepositoryInMemory implements ISpecificationRepository {
  specifications: Specification[] = [];

  async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name
    });

    this.specifications.push(specification);

    return specification;
  }
  async list(): Promise<Specification[]> {
    const allSpecifications = this.specifications;

    return allSpecifications;
  }

  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(specification => specification.name === name);
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.specifications.filter(specification => ids.includes(specification.id));

    return allSpecifications;
  }
}

export { SpecificationRepositoryInMemory };