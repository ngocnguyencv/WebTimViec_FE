import {Company} from "./Company";
import {Category} from "./Category";
import {Locations} from "./Locations";

export class Job {
  id: number;
  title: string;
  code: string;
  salaryMin: number;
  salaryMax: number;
  address: string;
  expYear: number;
  expiredDate: Date;
  description: string;
  quantity: number;
  gender: string;
  status: number;
  location: Locations;
  company: Company;
  category: Category;

  constructor(id: number, title: string, code: string, salaryMin: number, salaryMax: number, address: string, expYear: number, expiredDate: Date, description: string, quantity: number, gender: string, status: number, location: Locations, company: Company, category: Category) {
    this.id = id;
    this.title = title;
    this.code = code;
    this.salaryMin = salaryMin;
    this.salaryMax = salaryMax;
    this.address = address;
    this.expYear = expYear;
    this.expiredDate = expiredDate;
    this.description = description;
    this.quantity = quantity;
    this.gender = gender;
    this.status = status;
    this.location = location;
    this.company = company;
    this.category = category;
  }
}
