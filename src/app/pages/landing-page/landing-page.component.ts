import { Component, OnInit } from '@angular/core';
import { GnomesService } from '../../services/gnomes.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  private gnomes: any;
  private gnomesOrdered: any;
  gnomesShowing: any;
  displayProfile: boolean;
  gnome: any;

  constructor(private gnomesService: GnomesService) { }

  ngOnInit() {
    this.displayProfile = false;

    this.gnomesService.getAllGnomes()
      .then(result => {
        const gnomesArray = Object.values(result);
        this.gnomes = new Array(...gnomesArray[0]);
        this.gnomesShowing = this.gnomes;
      });
    }

  private sortArray(array) {
    this.gnomesOrdered = new Array(...array);
    this.gnomesOrdered.sort((a: any, b: any) => {
      return b.age - a.age;
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

  handleCheckboxClick(input) {
    if (input.checked) {

      if (!this.gnomesOrdered) {
        this.sortArray(this.gnomes);
      }

      this.gnomesShowing = this.gnomesOrdered;
    } else {
      this.gnomesShowing = this.gnomes;
    }
  }

}
