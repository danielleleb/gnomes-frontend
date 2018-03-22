import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() submitForm = new EventEmitter<any>();

  @Input() feedbackEnabled: boolean;
  @Input() error: string;
  @Input() processing: boolean;

  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  submitSignUpForm(form) {
    this.error = null;
    this.feedbackEnabled = true;
    if (form.valid) {
      // this.processing = false;
      const data = {
        username: this.username,
        password: this.password
      };
      this.submitForm.emit(data);
     }
  }
}
