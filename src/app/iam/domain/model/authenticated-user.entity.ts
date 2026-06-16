export class AuthenticatedUser {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _token: string;

  constructor(id: number, firstName: string, lastName: string, token: string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._token = token;
  }

  get id(): number {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  get token(): string {
    return this._token;
  }
}
