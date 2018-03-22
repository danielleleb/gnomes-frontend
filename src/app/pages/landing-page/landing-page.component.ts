import { Component, OnInit } from '@angular/core';
import { GnomesService } from '../../services/gnomes.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  gnomes: any;

  constructor(private gnomesService: GnomesService) { }

  ngOnInit() {
    this.gnomesService.getAllGnomes()
      .then(result => {
        this.gnomes = Object.values(result);
        this.gnomes = this.gnomes[0];
        console.log(Object.values(result));
        console.log(this.gnomes);
      });
  }

}
