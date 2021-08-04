declare namespace Express {
  export interface Request {
    user: {
      id: string;
    }
  }
}

// nesse arquivo estamos subescrevendo a tipagem do express 