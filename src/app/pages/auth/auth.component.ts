import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: boolean;
  signupForm: boolean;
  feedbackEnabled: boolean;
  error: any;
  processing: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = true;
    this.signupForm = false;
    this.feedbackEnabled = false;
    this.error = null;
    this.processing = false;
  }

  toggleAuthForms() {
    this.signupForm = !this.signupForm;
    this.loginForm = !this.loginForm;
  }

  handleLoginForm(event) {
    this.error = null;
      this.authService.login(event)
        .then(result => {
            this.router.navigate(['']);
        })
        . catch((err) => {
          this.processing = false;
          this.error =  err.error.error;
          this.feedbackEnabled = false;
        });
  }

  handleSubmitForm(event) {
    this.error = null;
    this.authService.signup(event)
    .then((result) => {
     this.router.navigate(['']);
    })
    .catch((err) => {
      this.error = err.error.error;
      this.processing = false;
      this.feedbackEnabled = false;
    });

  }
}
