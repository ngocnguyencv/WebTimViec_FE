import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AccountserviceService} from "../../service/accountService/accountservice.service";
import {Account} from "../../model/Account";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ImageSnippet} from "../../model/ImageSnippet";
import {ImageserviceService} from "../../service/image/imageservice.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
  email!: string;
  account!: Account;
  formEditUser!: FormGroup;
  formEditPassword!: FormGroup;
  RegexAlphaNumeric = "^[a-zA-Z0-9]{8,16}";

  constructor(private Roter: ActivatedRoute, public acountservice: AccountserviceService, private imageService: ImageserviceService, private router: Router) {
  }

  ngOnInit(): void {
    this.Roter.params.subscribe((param) => {
      this.email = param["email"]
    })
    this.showOneUser(this.email)

    this.formEditUser = new FormGroup({
      id: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("", Validators.pattern(this.RegexAlphaNumeric)),
      name: new FormControl("", Validators.required),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^0\d{8,9}$/)]),
      address: new FormControl("", Validators.required),
      avatar: new FormControl(""),
      status: new FormControl(""),
      description: new FormControl("", Validators.required),
      banner: new FormControl(""),
    })

    this.formEditPassword = new FormGroup({

      password: new FormControl("", Validators.required),
      passwordNew: new FormControl("", Validators.required),
      password2: new FormControl("", Validators.required),
    })
  }

  showOneUser(email: string) {
    this.acountservice.findUserbyemail(email).subscribe((data) => {
      this.account = data;
      this.formEditUser.get('id')?.setValue(data.id)
      this.formEditUser.get('email')?.setValue(data.email)
      this.formEditUser.get('password')?.setValue(data.password)
      this.formEditUser.get('name')?.setValue(data.name)
      this.formEditUser.get('phone')?.setValue(data.phone)
      this.formEditUser.get('address')?.setValue(data.address)
      this.formEditUser.get('avatar')?.setValue(data.avatar)
      this.formEditUser.get('status')?.setValue(data.status)
      this.formEditUser.get('description')?.setValue(data.description)
      this.formEditUser.get('banner')?.setValue(data.banner)
    })
  }

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
      this.imageService.uploadImageforUser(this.selectedFile.file).subscribe(
        (res) => {
          this.formEditUser.value.banner = res.url;
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });
    reader.readAsDataURL(file);
  }

  edit() {
    this.acountservice.editUser(this.formEditUser.value).subscribe((data) => {
      this.router.navigate(["/home"])
    })
  }

  EditPassword1() {
    let password = this.formEditPassword.get('password')?.value
    let passwordNew = this.formEditPassword.get('passwordNew')?.value
    let password2 = this.formEditPassword.get('password2')?.value
    if (password == this.account.password) {
      if (passwordNew == password2) {

        this.account.password = this.formEditPassword.value.passwordNew;
        this.acountservice.editAccount(this.account).subscribe((data) => {
          alert("Thành công")
        })
      } else {
        alert("Nhập lại mật khẩu không trùng khớp!")
      }
    } else {
      alert("Mật khẩu cũ không trùng khớp!")
    }
  }
}
