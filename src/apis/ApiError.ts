export class ApiError<T> extends Error {
  options?: T;

  constructor(message: string, options?: T) {
    super(message);
    this.options = options;
  }
}

export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}
