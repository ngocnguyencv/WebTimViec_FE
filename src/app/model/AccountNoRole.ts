export class AccountNoRole {
  id: number;
  email: string
  password: string;
  name: string;
  phone: string;
  address: string;
  avatar: string;
  status: boolean;
  description: string;
  banner: string;

  constructor(id: number, email: string, password: string, name: string, phone: string, address: string, avatar: string, status: boolean, description: string, banner: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.avatar = avatar;
    this.status = status;
    this.description = description;
    this.banner = banner;
  }
}
