export class Administrator {
  private _id: number;
  private _name: string;
  private _role: string;
  private _status: string;

  constructor(id: number, name: string, role: string, status: string) {
    this._id = id;
    this._name = name;
    this._role = role;
    this._status = status;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get role(): string {
    return this._role;
  }

  get status(): string {
    return this._status;
  }
}
