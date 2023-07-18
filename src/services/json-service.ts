import { RequestTypes } from '../enums/request-data-types.enum.js';
import { LoginData } from '../types/login.interface.js';
import { RequestData } from '../types/request-data.js';

export class JsonService {
  static parseRequest(reqStr: string) {
    const req: RequestData<string> = JSON.parse(reqStr)
    return {...req, data: !!req.data ? JSON.parse(req.data) : ''}
  }

  static stringifyResponse(req: RequestData<any>) {
      const data = JSON.stringify(req.data)
      return JSON.stringify({
        ...req,
        data
      })
    }
}