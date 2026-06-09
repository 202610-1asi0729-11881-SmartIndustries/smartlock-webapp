export class Organization {
  private _id: number;
  private _name: string;
  private _owner: string;
  private _description: string;

  constructor(id: number, name: string, owner: string, description: string) {
    this._name = name;
    this._owner = owner;
    this._description = description;
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get owner(): string {
    return this._owner;
  }

  get description(): string {
    return this._description;
  }
}
