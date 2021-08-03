import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';


/**
 * Controllers - recebem nossa requisição e devolvem uma resposta
 * a partir disso nossa rota recebe o nosso controller
 */
class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    console.log('************* CONTROLLER:::: request.body ***************', request.body);
    console.log('*************name', name)
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };