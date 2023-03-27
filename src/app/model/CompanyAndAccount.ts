import {Role} from "./Role";

export class CompanyAndAccount {
  idAccount!: number;
  address!: string;
  avatar!: string
  banner!: string
  description!: string
  email!: string
  name!: string
  password!: string
  phone!: string
  status!: boolean
  role!: Role
  idCompany!: number;
  code!: string
  google_map!: string
  quantity!: number
  short_name!: string
  website!: string

  constructor(idAccount: number, address: string, avatar: string, banner: string, description: string, email: string, name: string, password: string, phone: string, status: boolean, role: Role, idCompany: number, code: string, google_map: string, quantity: number, short_name: string, website: string) {
    this.idAccount = idAccount;
    this.address = address;
    this.avatar = avatar;
    this.banner = banner;
    this.description = description;
    this.email = email;
    this.name = name;
    this.password = password;
    this.phone = phone;
    this.status = status;
    this.role = role;
    this.idCompany = idCompany;
    this.code = code;
    this.google_map = google_map;
    this.quantity = quantity;
    this.short_name = short_name;
    this.website = website;
  }
}
