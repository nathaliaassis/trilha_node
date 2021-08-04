import { inject, injectable } from "tsyringe";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}

@injectable()
class AuthencateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);


    const passwordMatch = compare(password, user.password);

    if (!user || !passwordMatch) {
      throw new Error('Email or password is incorrect!');
    }
    // hash criado no md5 generator
    const token = sign({}, 'da4d0cd38fa8189f06f0819252b6e789', {
      subject: user.id,
      expiresIn: '1d'
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }

    return tokenReturn;
  }
}

export { AuthencateUserUseCase }