export class ListJobCompanyAccount {
  idJob!: number;
  address!: string;
  codeJob!: string;
  descriptionJob!: string;
  exp_year!: number
  expired_date!: any;
  gender!: string;
  quantity!: number;
  min!: any
  max!: any
  statusJob!: number;
  title!: string;
  codeCompany!: string
  google_map!: string
  number_of_employees!: number
  short_name!: string
  website!: string
  avatar!: string
  banner!: string
  descriptionAcc!: string
  email!: string
  nameAcc!: string
  phone!: string
  statusAcc!: boolean
  nameCategory!: string
  nameLocation!: string

  constructor(idJob: number, address: string, codeJob: string, descriptionJob: string, exp_year: number, expired_date: any, gender: string, quantity: number, min: any, max: any, statusJob: number, title: string, codeCompany: string, google_map: string, number_of_employees: number, short_name: string, website: string, avatar: string, banner: string, descriptionAcc: string, email: string, nameAcc: string, phone: string, statusAcc: boolean, nameCategory: string, nameLocation: string) {
    this.idJob = idJob;
    this.address = address;
    this.codeJob = codeJob;
    this.descriptionJob = descriptionJob;
    this.exp_year = exp_year;
    this.expired_date = expired_date;
    this.gender = gender;
    this.quantity = quantity;
    this.min = min;
    this.max = max;
    this.statusJob = statusJob;
    this.title = title;
    this.codeCompany = codeCompany;
    this.google_map = google_map;
    this.number_of_employees = number_of_employees;
    this.short_name = short_name;
    this.website = website;
    this.avatar = avatar;
    this.banner = banner;
    this.descriptionAcc = descriptionAcc;
    this.email = email;
    this.nameAcc = nameAcc;
    this.phone = phone;
    this.statusAcc = statusAcc;
    this.nameCategory = nameCategory;
    this.nameLocation = nameLocation;
  }
}
