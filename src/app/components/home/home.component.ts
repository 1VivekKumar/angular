import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  PageTitle:string="Ascend - Home Page";


  customOptions: OwlOptions = {
    loop: false,
    dots: true,
    // navSpeed: 700,
    //items:1,
    //margin:25,
    //center: false,
    nav: false
    //autoWidth: true
  }

  constructor() { 
    

  }

  ngOnInit() {
  }

  

}
