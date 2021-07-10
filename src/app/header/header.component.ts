import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbCarouselConfig]
})
export class HeaderComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1, 2, 3, 4, 5, 6].map((n) => `assets/images/${n}.png`);


  // function to scroll to a selected ( id ) in another component

  moveTo(id: any): void {
    let el = document.getElementById(id);
    el?.scrollIntoView({
      behavior: 'smooth'
    });
  }




  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree

    config.interval = 3000;
    config.animation = false;
    config.pauseOnHover = false;
    config.pauseOnFocus = false;

    window.addEventListener("scroll", function () {
      let navbar = this.document.getElementById("navbar");


      if (this.window.pageYOffset > 300) {
        navbar?.classList.add("stick");
      }

      else {
        navbar?.classList.remove("stick");
      }
    });








  }






  ngOnInit(): void {


  }

}
