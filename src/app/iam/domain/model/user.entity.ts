export class User {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _email: string;

  constructor(id: number, firstName: string, lastName: string, email: string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
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

  get email(): string {
    return this._email;
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}
