import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContentService} from "../../../core/content.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  form: FormGroup;
  public educationList: FormArray;
  public experienceList: FormArray;
  public skillList: FormArray;
  public contactList: FormArray;
  public feedbackList: FormArray;

  constructor(private fb: FormBuilder, private contentService:ContentService ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      aboutMe: ['about me', Validators.required],
      educations: this.fb.array([this.contentService.onInitEducation(this.fb)]),
      experiences: this.fb.array([this.contentService.onInitExperience(this.fb)]),
      skills: this.fb.array([this.contentService.onInitSkill(this.fb)]),
      contacts: this.fb.array([this.contentService.onInitContact(this.fb)]),
      feedbacks: this.fb.array([this.contentService.onInitFeedback(this.fb)])
    });
    this.educationList = this.form.get('educations') as FormArray;
    this.experienceList = this.form.get('experiences') as FormArray;
    this.skillList = this.form.get('skills') as FormArray;
    this.contactList = this.form.get('contacts') as FormArray;
    this.feedbackList = this.form.get('feedbacks') as FormArray;
  }

  onSubmit() {
    this.contentService.submit(this.form);
  }

  get aboutMe() {
    return this.form.get("aboutMe");
  }

  addEducation() {
    this.educationList.push(this.contentService.createEducation(this.fb));
  }

  get educations() {
    return this.form.get('educations') as FormArray;
  }

  removeEducation(index) {
    this.educationList.removeAt(index);
  }

  getEducationsFormGroup(index): FormGroup {
    return this.educationList.controls[index] as FormGroup;
  }

//Experience
  addExperience() {
    this.experienceList.push(this.contentService.createExperience(this.fb));
  }

  get experiences() {
    return this.form.get('experiences') as FormArray;
  }

  removeExperience(index) {
    this.experienceList.removeAt(index);
  }

  getExperiencesFormGroup(index): FormGroup {
    return this.experienceList.controls[index] as FormGroup;
  }

  //Skills
  addSkill() {
    this.skillList.push(this.createSkill());
  }

  createSkill(): FormGroup {
    return this.fb.group({
      skill: [null, Validators.compose([Validators.required])],
      level: [null, Validators.compose([Validators.required])],
    });
  }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  removeSkill(index) {
    this.skillList.removeAt(index);
  }

  getSkillsFormGroup(index): FormGroup {
    return this.skillList.controls[index] as FormGroup;
  }

  //Contacts
  addContact() {
    this.contactList.push(this.contentService.createContact(this.fb));
  }

  get contacts() {
    return this.form.get('contacts') as FormArray;
  }

  removeContact(index) {
    this.contactList.removeAt(index);
  }

  getContactsFormGroup(index): FormGroup {
    return this.contactList.controls[index] as FormGroup;
  }

  //Feedbacks
  addFeedback() {
    this.feedbackList.push(this.contentService.createFeedback(this.fb));
  }

  get feedbacks() {
    return this.form.get('feedbacks') as FormArray;
  }

  removeFeedback(index) {
    this.feedbackList.removeAt(index);
  }

  getFeedbacksFormGroup(index): FormGroup {
    return this.feedbackList.controls[index] as FormGroup;
  }
}
