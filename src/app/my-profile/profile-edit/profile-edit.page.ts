import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  users = [];
  testUser = "user_123456";
  name;
  address;
  email;
  mobile;
  constructor(private userService: UserService) { }

  ngOnInit() {
		this.userService.getUsers(this.testUser).subscribe(users => {
        this.users.push(users.data());
        console.log(users.data());
		});
  }
  onUpdateUser(data) {
    console.log(data);
    this.userService.editUser(data);
    this.name = "";
    this.address = "";
    this.mobile = "";
    this.email = "";
  }
}
