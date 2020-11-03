import {Component, OnInit} from '@angular/core';
import {ContentService} from "../../../core/content.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
  }

  title = 'portfolio-app';
  name = 'John Doe';
  profilePhotoSrc = 'assets/source/profile.png';
  aboutMeId = 'about-me';
  aboutMeHeader = 'About me';
  educationId = 'education';
  educationHeader = 'Education';
  experienceId = 'experience';
  experienceHeader = 'Experience';
  contactsId = 'contacts';
  contactsHeader = 'Contacts';
  feedbacksId = 'feedbacks';
  feedbacksHeader = 'Feedbacks';
  skillsId = 'skills';

  aboutMeText = this.contentService.aboutMeText;
  educations = this.contentService.educations;
  experiences = this.contentService.experiences;
  contacts = this.contentService.contacts;
  feedbacks = this.contentService.feedbacks;
}
