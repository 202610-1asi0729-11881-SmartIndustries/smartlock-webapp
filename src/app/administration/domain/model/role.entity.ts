export class Role {
  private _id: number;
  private _organizationId: number;
  private _name: string;
  private _canCreateSites: boolean;
  private _canCreatePeople: boolean;
  private _canConnectDevices: boolean;
  private _deletable: boolean;

  constructor(
    id: number,
    organizationId: number,
    name: string,
    canCreateSites: boolean,
    canCreatePeople: boolean,
    canConnectDevices: boolean,
    deletable: boolean
  ) {
    this._id = id;
    this._organizationId = organizationId;
    this._name = name;
    this._canCreateSites = canCreateSites;
    this._canCreatePeople = canCreatePeople;
    this._canConnectDevices = canConnectDevices;
    this._deletable = deletable;
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

  get canCreateSites(): boolean {
    return this._canCreateSites;
  }

  get canCreatePeople(): boolean {
    return this._canCreatePeople;
  }

  get canConnectDevices(): boolean {
    return this._canConnectDevices;
  }

  get deletable(): boolean {
    return this._deletable;
  }
}