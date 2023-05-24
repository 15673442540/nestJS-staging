import { ArgumentsHost, Catch, ExceptionFilter, HttpException, LoggerService } from "@nestjs/common";
import { Request, Response } from 'express';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter { 
    constructor(private readonly logger: LoggerService,) { }
    catch(exception: HttpException,host:ArgumentsHost) { 

        const ctx = host.switchToHttp();
        const req = ctx.getRequest<Request>();
        const res = ctx.getResponse<Response>();
        const status = exception.getStatus();
        const resBody = {
            timestamp: new Date().toISOString(),
            path: req.url,
            // headers: req.headers,
            query: req.query,
            body: req.body,
            params: req.params,
            // exception: exception['name'],
            error: exception['response']
        }

        this.logger.error('[toimc]', resBody)
        
        return res.status(status).json({
            statusCode: status,
           ...resBody
        })
        



    } 
        

}