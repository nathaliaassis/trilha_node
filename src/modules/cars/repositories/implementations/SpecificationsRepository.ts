import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationsRepository";

/**
 * os repositories são responsáveis por toda manipulação de dados
 * dentro da aplicação
 */

class SpecificationsRespository implements ISpecificationRepository {
  private specifications: Specification[];

  // singleton - para nao criar novas intancias do repository
  private static INSTANCE: SpecificationsRespository;

  private constructor() {
    this.specifications = [];
  }

  //get instance é responsável por instanciar nossa classe ou retornar 
  // uma instancia já existente
  public static getInstance(): SpecificationsRespository {
    if (!SpecificationsRespository.INSTANCE) {
      SpecificationsRespository.INSTANCE = new SpecificationsRespository();
    }

    return SpecificationsRespository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    // passa todos os valores para dentro do specification
    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) =>
      specification.name === name
    );
    return specification;
  }
}

export { SpecificationsRespository };