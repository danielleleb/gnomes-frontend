import { Component, OnInit } from '@angular/core';
import { GnomesService } from '../../services/gnomes.service';
import { SearchPipe } from '../../pipes/search.pipe';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  gnomes: any;
  displayProfile: boolean;
  gnome: any;

  constructor(private gnomesService: GnomesService) { }

  ngOnInit() {
    this.displayProfile = false;

    this.gnomesService.getAllGnomes()
      .then(result => {
        this.gnomes = Object.values(result);
        this.gnomes = this.gnomes[0];
        console.log(Object.values(result));
        console.log(this.gnomes);
      });
  }

  toggleDisplayProfile(gnome) {
    if (!document.getElementsByClassName('modal-open')) {
      this.gnome = gnome;
      this.displayProfile = !this.displayProfile;
      document.getElementById('container').classList.add('modal-open');
    } else if (document.getElementsByClassName('modal-open')) {
      this.gnome = gnome;
      this.displayProfile = !this.displayProfile;
      document.getElementById('container').classList.remove('modal-open');
    }

  }

}
