import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-gnome-card',
  templateUrl: './gnome-card.component.html',
  styleUrls: ['./gnome-card.component.css']
})
export class GnomeCardComponent implements OnInit {
  @Input() gnome;
  anon: boolean;
  user: any;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    this.user = this.authService.getUser();

  }

}
