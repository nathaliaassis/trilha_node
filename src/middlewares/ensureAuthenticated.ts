import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }
  // divide o valor que estiver la dentro (['bearer', 'xpto123'])
  // a virgula ignora o valor do primeiro index
  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'da4d0cd38fa8189f06f0819252b6e789') as IPayload;
    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exist', 401);
    }

    //precisamos subescrever a tipagem das libs 
    request.user = {
      id: user_id
    }

    next();
  } catch {
    throw new AppError('Invalid token.', 401);
  }
}