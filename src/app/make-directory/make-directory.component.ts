import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-make-directory',
  templateUrl: './make-directory.component.html',
  styleUrls: ['./make-directory.component.css']
})
export class MakeDirectoryComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit() {
  }

}
