import {Component, OnInit} from '@angular/core';
import {AccountToken} from "../../model/AccountToken";
import {LoginService} from "../../service/login/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Company} from "../../model/Company";
import {Account} from "../../model/Account";
import {CompanyAndAccount} from "../../model/CompanyAndAccount";
import {CompanyserviceService} from "../../service/companyService/companyservice.service";
import {Router} from "@angular/router";
import {AccountserviceService} from "../../service/accountService/accountservice.service";
import {ImageSnippet} from "../../model/ImageSnippet";
import {ImageserviceService} from "../../service/image/imageservice.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-informationcompany',
  templateUrl: './informationcompany.component.html',
  styleUrls: ['./informationcompany.component.css']
})

export class InformationcompanyComponent implements OnInit {
  company !: CompanyAndAccount;
  accountToken !: AccountToken;
  email!: string;
  formEdit !: FormGroup;
  newAccount!: Account;
  newCompany!: Company;

  constructor(private companyService: CompanyserviceService, private loginService: LoginService,
              private router: Router, private accountService: AccountserviceService,
              private imageService: ImageserviceService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.accountToken = this.loginService.getUserToken();
    this.email = this.accountToken.email;
    if (this.email != null) {
      this.companyService.findAllCompany(this.accountToken.email).subscribe(data => {
        this.company = data
        this.formEdit = new FormGroup({
          id: new FormControl(this.company?.idAccount),
          idCompany: new FormControl(this.company?.idCompany),
          password: new FormControl(this.company?.password),
          avatar: new FormControl(this.company?.avatar),
          status: new FormControl(this.company?.status),
          name: new FormControl(this.company?.name, Validators.required),
          short_name: new FormControl(this.company?.short_name),
          code: new FormControl(this.company?.code, Validators.required),
          address: new FormControl(this.company?.address, Validators.required),
          phone: new FormControl(this.company?.phone, [Validators.required, Validators.pattern(/^0\d{8,9}$/)]),
          email: new FormControl(this.company?.email, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
          quantity: new FormControl(this.company?.quantity, Validators.required),
          description: new FormControl(this.company?.description, Validators.required),
          banner: new FormControl(this.company?.banner),
          website: new FormControl(this.company?.website, Validators.required),
          google_map: new FormControl(this.company?.google_map, Validators.required),
          role: new FormGroup({
            id: new FormControl()
          }),
          account: new FormGroup({
            id: new FormControl()
          })
        })
        // @ts-ignore
        this.formEdit?.get("role")?.get("id").setValue(data.role);
      }, error => {
        alert("Lỗi!")
      })
    }
  }

  editCompanyAndAccount() {
    this.newAccount = new Account(this.formEdit.value.id,
      this.formEdit.value.email,
      this.formEdit.value.password,
      this.formEdit.value.name,
      this.formEdit.value.phone,
      this.formEdit.value.address,
      this.formEdit.value.avatar,
      this.formEdit.value.status,
      this.formEdit.value.description,
      this.formEdit.value.banner,
      this.formEdit.value.role);
    this.newAccount.role.id = +this.formEdit.value.role.id;

    this.accountService.editAccount(this.newAccount).subscribe((data) => {
    }, () => {
      this.errorNotification();
    })

    this.newCompany = new Company(this.formEdit.value.idCompany,
      this.formEdit.value.short_name,
      this.formEdit.value.code,
      this.formEdit.value.quantity,
      this.formEdit.value.google_map,
      this.formEdit.value.website,
      this.formEdit.value.account);
    this.newCompany.account.id = +this.formEdit.value.id;

    this.companyService.editCompany(this.newCompany).subscribe((data) => {
      this.router.navigate(['/homeCompany']);
    })
  }

  //Upload image
  selectedFile!: ImageSnippet;

  onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.formEdit.value.banner = res.url;
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });
    reader.readAsDataURL(file);
  }

  errorNotification() {
    Swal.fire('Số điện thoại đã tồn tại!', '', 'error');
  }
}
