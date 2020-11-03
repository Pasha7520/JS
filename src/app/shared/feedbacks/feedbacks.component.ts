import {Component, Input, OnInit} from '@angular/core';
import {Feedback} from "../../Feedback";

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
  @Input()
  feedbacksId: string;
  @Input()
  feedbacksHeader: string;
  @Input()
  feedbacks: Feedback[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
