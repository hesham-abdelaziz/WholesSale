import { R3TargetBinder, Target } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-devices',
  templateUrl: './responsive-devices.component.html',
  styleUrls: ['./responsive-devices.component.css']
})
export class ResponsiveDevicesComponent implements OnInit {


  constructor() {

    // function to add and remove active class from the selected link 
    $(document).on('click', 'ul li', function () {
      $(this).addClass('active').siblings().removeClass('active');
    })


  }

  ngOnInit(): void {

  }


}
