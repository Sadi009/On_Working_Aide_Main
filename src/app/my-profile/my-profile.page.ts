import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  users = [];
  testUser = "user_123456";
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("Data Loading...");
		this.userService.getUsers(this.testUser).subscribe(users => {
				console.log(users.data());
				this.users.push(users.data());
		});
	
  }

}
