import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string;
  email: string;
  password: string;
  errorMessage: string;

  constructor( private authService: AuthService,
    public toastController: ToastController ) { }

  ngOnInit() {
  }

  private signup() {
    let user = {
      username: this.username,
      email: this.email,
      password: this.password
    }
    console.log('user is', user);
    this.authService.signup(user)
    .subscribe( data => {
      console.log('data in authservice signup', data)
    }, err => {
      console.error(err);
      if (Array.isArray(err.error.message)) {
        this.errorMessage = err.error.message[0].message;
      } else {
        this.errorMessage = err.error.message;
      }
      this.presentToast();
    }, () => {
      console.log('user signed up!');
    })
  }

  // display error message
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.errorMessage,
      color: 'danger',
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
  
}
