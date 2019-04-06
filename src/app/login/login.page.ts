import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  errorMessage: string;

  constructor( private authService: AuthService,
    public toastController: ToastController,
    private router: Router ) { }

  ngOnInit() {
  }

  private login() {
    let user = {
      username: this.username,
      password: this.password
    }
    console.log('user is', user);
    this.authService.login(user)
        .subscribe( data => {
          console.log(data);
        }, 
        err => {
          console.error(err);
          if (Array.isArray(err.error.message)) {
            this.errorMessage = err.error.message[0].message;
          } else {
            this.errorMessage = err.error.message;
          }
          this.presentToast();
        }, 
        () => {
          console.log('user logged in');
          this.router.navigate(['/streams']);
        })
  }

  // display error message
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.errorMessage,
      color: 'danger',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}
