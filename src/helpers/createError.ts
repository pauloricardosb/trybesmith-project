export default class CreateError extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);

    this.status = status;
  }
}