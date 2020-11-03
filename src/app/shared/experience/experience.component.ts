import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "../../Experience";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input()
  experienceId: string;
  @Input()
  experienceHeader: string;
  @Input()
  experiences: Experience[]

  constructor() {
  }

  ngOnInit(): void {
  }

}
