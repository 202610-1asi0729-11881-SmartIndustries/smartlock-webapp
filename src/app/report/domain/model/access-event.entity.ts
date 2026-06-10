export class AccessEvent {
  private _id: number;
  private _location: string;
  private _person: string;
  private _status: string;
  private _date: string;

  constructor(id: number, location: string, person: string, status: string, date: string) {
    this._id = id;
    this._location = location;
    this._person = person;
    this._status = status;
    this._date = date;
  }

  get id(): number {
    return this._id;
  }

  get location(): string {
    return this._location;
  }

  get person(): string {
    return this._person;
  }

  get status(): string {
    return this._status;
  }

  get date(): string {
    return this._date;
  }
}
