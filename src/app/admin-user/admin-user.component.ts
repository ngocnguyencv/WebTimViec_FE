import {Component, OnInit} from '@angular/core';
import {AccountserviceService} from "../service/accountService/accountservice.service";
import {Account} from "../model/Account";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  formsearch!: FormGroup
  ListAccount: Account[] = []

  p: number = 1;
  total: number = 0;

  ngOnInit(): void {
    this.getallUser()

    this.formsearch = new FormGroup({
      name: new FormControl("")
    })
  }

  constructor(public AccountService: AccountserviceService) {
  }

  getallUser() {
    this.AccountService.getallUser().subscribe((data) => {
      this.ListAccount = data;
      this.total = this.ListAccount.length;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getallUser();
  }

  blockUser(id: number) {
    this.AccountService.blokUser(id).subscribe((data) => {
      this.getallUser()
    })
  }

  seagchbynameUser() {
    let value = this.formsearch.get('name')?.value
    this.AccountService.searchbyUser(value).subscribe((data) => {
      this.ListAccount = data
    })
  }
}
