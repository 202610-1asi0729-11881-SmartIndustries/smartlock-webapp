export class Site {
  private _id: number;
  private _organizationId: number;
  private _name: string;
  private _description: string;

  constructor(id: number, organizationId: number, name: string, description: string) {
    this._id = id;
    this._organizationId = organizationId;
    this._name = name;
    this._description = description;
  }

  get id(): number {
    return this._id;
  }

  get organizationId(): number {
    return this._organizationId;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }
}
