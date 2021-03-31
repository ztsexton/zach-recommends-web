import { Component, OnInit } from '@angular/core';
import { RECOMMENDATIONS } from './mock-recommends';
import { Recommendation } from '../recommendation';

@Component({
  selector: 'app-recommends',
  templateUrl: './recommends.component.html',
  styleUrls: ['./recommends.component.css']
})
export class RecommendsComponent implements OnInit {
  recommends: Recommendation[];
  constructor() { }

  ngOnInit(): void {
    this.recommends = RECOMMENDATIONS;
  }

}
