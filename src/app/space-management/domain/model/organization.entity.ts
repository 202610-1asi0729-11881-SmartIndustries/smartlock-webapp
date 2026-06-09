export class Organization {
  private _name: string;
  private _owner: string;
  private _description: string;

  constructor(name: string, owner: string, description: string) {
    this._name = name;
    this._owner = owner;
    this._description = description;
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
