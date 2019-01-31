export class Employee {
  id: number;
  Name: string;
  Email: string;
  Address: {
    Address1: string,
    Address2: string
  };

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
