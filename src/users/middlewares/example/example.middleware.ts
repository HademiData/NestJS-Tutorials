
import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request,  Response} from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Example Middleware');
    console.log(req.headers.authorization);

    const {authorization} = req.headers;
    if (!authorization) throw new HttpException('No Authorization token', 403)

    if (authorization == 'qwerty') next();
    else throw new HttpException(
      'Invalid Authorization Token',
      404,
    );
  }
  
}
