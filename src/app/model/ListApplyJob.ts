export class ListApplyJob {
  idAccount: number;
  email: string;
  nameAcc: string;
  statusAcc: boolean;
  idApply: number;
  count: number;
  cv: string;
  message: string;
  statusApply: number;
  idJob: number;
  codeJob: string;
  statusJob: number;
  title: string;
  idCompany: number;
  short_name: string;
  idRole: number;

  constructor(idAccount: number, email: string, nameAcc: string, statusAcc: boolean, idApply: number, count: number, cv: string, message: string, statusApply: number, idJob: number, codeJob: string, statusJob: number, title: string, idCompany: number, short_name: string, idRole: number) {
    this.idAccount = idAccount;
    this.email = email;
    this.nameAcc = nameAcc;
    this.statusAcc = statusAcc;
    this.idApply = idApply;
    this.count = count;
    this.cv = cv;
    this.message = message;
    this.statusApply = statusApply;
    this.idJob = idJob;
    this.codeJob = codeJob;
    this.statusJob = statusJob;
    this.title = title;
    this.idCompany = idCompany;
    this.short_name = short_name;
    this.idRole = idRole;
  }
}
