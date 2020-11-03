import {Component, Input, OnInit} from '@angular/core';
import {Education} from "../../Education";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input()
  educationId: string;
  @Input()
  educationHeader: string;
  @Input()
  educations: Education[];

  constructor
  () {
  }

  ngOnInit()
    :
    void {
  }

}
