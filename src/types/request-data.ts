
export class RequestData<T> {
  constructor(
    public type: string,
    public data: T,
    private id: number = 0,
  ) {}
}


