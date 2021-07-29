import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepositories';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  // a rota recebe a requisição
  const { name, description } = request.body;
  //chama o serviço
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  //executa
  createCategoryService.execute({ name, description });
  //retorna
  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.list();
  return response.json(allCategories)
})

export { categoriesRoutes };
