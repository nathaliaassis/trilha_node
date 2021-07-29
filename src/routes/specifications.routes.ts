import { request, Router } from 'express';
import { SpecificationsRespository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../services/CreateSpecificationService';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRespository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(specificationsRepository);
  createSpecificationService.execute({ name, description });

  return response.status(201).send();
})

export { specificationsRoutes };