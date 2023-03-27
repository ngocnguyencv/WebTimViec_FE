import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RegistercompanyService} from "../../service/register/registercompany.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../model/Account";
import {Role} from "../../model/Role";
import {MessageService} from "primeng/api";
import Swal from "sweetalert2";

@Component({
  selector: 'app-registercompany',
  templateUrl: './registercompany.component.html',
  styleUrls: ['./registercompany.component.css'],
  providers: [MessageService]

})
export class RegistercompanyComponent implements OnInit {
  RegexAlphaNumeric = "^[a-zA-Z0-9]{8,16}";
  account!: Account;
  selectedOption: any;
  idRole!: any;
  roles: Role[] = [];

  ngOnInit(): void {
  }

  constructor(private registerCompanyService: RegistercompanyService, private router: Router, private route: ActivatedRoute, private messageService: MessageService) {
  }

  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl("", [Validators.required, Validators.pattern(this.RegexAlphaNumeric)]),
    name: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^0\d{8,9}$/)]),
    role: new FormGroup({
      id: new FormControl('',)
    })
  })

  register() {
    this.idRole = this.registerForm.value.role;
    console.log(this.idRole)
    this.registerCompanyService.register(this.registerForm.value).subscribe((data) => {
      this.account = data;
      console.log(this.account)
      this.successNotification()
      this.router.navigate(["/login"])
    }, () => {
      this.errorNotification()
    })
  }

  successNotification() {
    Swal.fire('Đăng ký thành công!', '', 'success');
  }

  errorNotification() {
    Swal.fire('Đăng ký thất bại!', 'Vui lòng kiểm tra email hoặc số điện thoại đã tồn tại!', 'error');
  }
}
