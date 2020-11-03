import {Injectable} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContentApiService} from "./content-api.service";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private contentApiService: ContentApiService) {
  }

  aboutMeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.';

  educations = [
    {
      time: '1990',
      title: 'Title',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      time: '1991',
      title: 'Title',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      time: '1992',
      title: 'Title',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      time: '1993',
      title: 'Title',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    }
  ];

  experiences = [
    {
      company: 'Google',
      position: 'Front-end developer / php programmer',
      period: '2013-2014',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      company: 'Twiter',
      position: 'Web Developerr',
      period: '2012',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    }
  ];

  contacts = [
    {
      imgSrc: 'assets/source/phone-24.png',
      header: '',
      text: '500 345 24'
    },
    {
      imgSrc: 'assets/source/mail-24.png',
      header: '',
      text: 'office@kamsolutions.pl'
    },
    {
      imgSrc: 'assets/source/twitter-24.png',
      header: 'Twitter',
      text: 'https://twitter.com/WordPress'
    },
    {
      imgSrc: 'assets/source/facebook-24.png',
      header: 'Facebook',
      text: 'https://facebook.com/facebook'
    },
    {
      imgSrc: 'assets/source/skype-24.png',
      header: 'Skype',
      text: 'kamsolutions.pl'
    },
  ];

  feedbacks = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sitamet, consectetur adipiscing elit.',
      author: 'Martin Friman. Programmer.',
      link: 'https://www.google.com.ua/',
      linkText: 'somesite.com',
      imgSrc: 'assets/source/profile.png',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sitamet, consectetur adipiscing elit.',
      author: 'Martin Friman. Programmer.',
      link: 'https://www.google.com.ua/',
      linkText: 'somesite.com',
      imgSrc: 'assets/source/profile.png',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sitamet, consectetur adipiscing elit.',
      author: 'Martin Friman. Programmer.',
      link: 'https://www.google.com.ua/',
      linkText: 'somesite.com',
      imgSrc: 'assets/source/profile.png',
    }
  ];

  onInitAboutMe() {
    return this.aboutMeText;
  }

  onInitEducation(fb: FormBuilder): FormGroup {
    return fb.group({
        time: ['1990', Validators.compose([Validators.required, ValidateYear])],
        title: ['Title', Validators.compose([Validators.required])],
        details: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', Validators.compose([Validators.required])]
      }
    );
  }

  onInitExperience(fb: FormBuilder): FormGroup {
    return fb.group({
      company: ['Google', Validators.compose([Validators.required])],
      position: ['Front-end developer / php programmer', Validators.compose([Validators.required])],
      period: ['2013-2014', Validators.compose([Validators.required])],
      text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', Validators.compose([Validators.required])]
    });
  }

  onInitSkill(fb: FormBuilder): FormGroup {
    return fb.group({
      skill: ['HTML', Validators.compose([Validators.required])],
      level: ['Beginner', Validators.compose([Validators.required])],
    });
  }

  onInitContact(fb: FormBuilder): FormGroup {
    return fb.group({
      iconName: ['skype_icon', Validators.compose([Validators.required])],
      title: ['skype', Validators.compose([Validators.required])],
      value: ['some.skype', Validators.compose([Validators.required])],
      link: ['www.somesite.com', Validators.compose([Validators.required])],
    });
  }

  onInitFeedback(fb: FormBuilder): FormGroup {
    return fb.group({
      fullName: ['Martin Friman', Validators.compose([Validators.required])],
      role: ['Programmer', Validators.compose([Validators.required])],
      link: ['https://www.google.com.ua/'],
      text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sitamet, consectetur adipiscing elit.', Validators.compose([Validators.required])],
    });
  }

  createEducation(fb: FormBuilder): FormGroup {
    return fb.group({
      time: [null, Validators.compose([Validators.required, ValidateYear])],
      title: [null, Validators.compose([Validators.required])],
      details: [null, Validators.compose([Validators.required])]
    });
  }

  createExperience(fb: FormBuilder): FormGroup {
    return fb.group({
      company: [null, Validators.compose([Validators.required])],
      position: [null, Validators.compose([Validators.required])],
      period: [null, Validators.compose([Validators.required])],
      text: [null, Validators.compose([Validators.required])]
    });
  }

  createContact(fb: FormBuilder): FormGroup {
    return fb.group({
      iconName: [null, Validators.compose([Validators.required])],
      title: [null, Validators.compose([Validators.required])],
      value: [null, Validators.compose([Validators.required])],
      link: [null, Validators.compose([Validators.required])],
    });
  }

  createFeedback(fb: FormBuilder): FormGroup {
    return fb.group({
      fullName: [null, Validators.compose([Validators.required])],
      role: [null, Validators.compose([Validators.required])],
      link: [null],
      text: [null, Validators.compose([Validators.required])],
    });
  }

  submit(form: FormGroup) {
    console.log(this.contentApiService.postData(form));

    this.educations = form.value.educations;
    this.experiences = form.value.experiences;
    this.aboutMeText = form.value.aboutMe;
    this.feedbacks = form.value.feedbacks;
    this.contacts = form.value.contacts;
  }
}

function ValidateYear(control: AbstractControl): { [key: string]: any } | null {
  if (control.value && control.value.length != 4) {
    return {'yearInvalid': true};
  }
  return null;
}
