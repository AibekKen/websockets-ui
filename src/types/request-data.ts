import { RequestTypes } from '../enums/request-data-types.enum.js';

export class RequestData<T> {
  constructor(
    public type: RequestTypes,
    public data: T,
    private id: number = 0,
  ) {}
}


