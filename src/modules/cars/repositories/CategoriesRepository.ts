import { Category } from "../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

/**
 * os repositories são responsáveis por toda manipulação de dados
 * dentro da aplicação
 */

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  // singleton - para nao criar novas intancias do repository
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  //get instance é responsável por instanciar nossa classe ou retornar 
  // uma instancia já existente
  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) =>
      category.name === name
    )

    return category;
  }
}

export { CategoriesRepository };