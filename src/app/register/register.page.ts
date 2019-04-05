import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string;
  email: string;
  password: string;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
  }

  signup() {
    let user = {
      username: this.username,
      email: this.email,
      password: this.password
    }
    console.log('user is', user);
    this.authService.signup(user);
    console.log('user signed up!');
  }

}
