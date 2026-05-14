export class Organization {
  private _id: number;
  private _name: string;

  constructor(props: { id: number; name: string }) {
    this._id = props.id;
    this._name = props.name;
  }

  getName(): string {return this._name}
  getId(): number {return this._id;}
}
