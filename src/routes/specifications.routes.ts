import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
})

export { specificationsRoutes };