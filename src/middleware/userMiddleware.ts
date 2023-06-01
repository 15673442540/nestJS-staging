import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    res.status(200).send({
      url: req.url,
      params:req.ip
    })
    next();
  }
}
