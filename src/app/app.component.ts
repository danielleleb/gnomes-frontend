import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  anon: boolean;
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.user = user;
      this.anon = !user;
    });
  }

  login() {
    this.router.navigate(['/auth']);
  }

  landingPage() {
    this.router.navigate(['']);
    // window.location.reload();
  }

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['']));
      window.location.reload();
  }

}
