import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
  }

  login() {
    let user = {
      username: this.username,
      email: this.password
    }
    console.log('user is', user);
    this.authService.login(user);
    console.log('user logged in!');
  }

}
