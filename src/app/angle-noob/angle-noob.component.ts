import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-angle-noob',
  templateUrl: './angle-noob.component.html',
  styleUrls: ['./angle-noob.component.css']
})
export class AngleNoobComponent implements OnInit {

  constructor    (private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
  }

}
