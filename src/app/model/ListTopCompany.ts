export class ListTopCompany {
  company_id!: number;
  short_name!: string;
  avatar!: string;
  sum_quantity!: number;

  constructor(company_id: number, short_name: string, avatar: string, sum_quantity: number) {
    this.company_id = company_id;
    this.short_name = short_name;
    this.avatar = avatar;
    this.sum_quantity = sum_quantity;
  }
}
