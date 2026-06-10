export class Person {
  private _id: number;
  private _name: string;
  private _currentLocation: string;
  private _status: string;

  constructor(id: number, name: string, currentLocation: string, status: string) {
    this._id = id;
    this._name = name;
    this._currentLocation = currentLocation;
    this._status = status;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get currentLocation(): string {
    return this._currentLocation;
  }

  get status(): string {
    return this._status;
  }
}
