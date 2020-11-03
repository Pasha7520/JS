import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent} from './side-nav/side-nav.component';
import {AvatarComponent} from './avatar/avatar.component';
import {TextBlockComponent} from './text-block/text-block.component';
import {EducationComponent} from './education/education.component';
import {ExperienceComponent} from './experience/experience.component';
import {ContactsComponent} from './contacts/contacts.component';
import {FeedbacksComponent} from './feedbacks/feedbacks.component';
import {SkillsComponent} from './skills/skills.component';
import {NgbdModalFocus} from './modal/modal.component';


@NgModule({
  declarations: [SideNavComponent, AvatarComponent, TextBlockComponent, EducationComponent, ExperienceComponent, ContactsComponent, FeedbacksComponent, SkillsComponent, NgbdModalFocus],
  imports: [
    CommonModule
  ],
  exports: [SideNavComponent, AvatarComponent, TextBlockComponent, EducationComponent, ExperienceComponent, ContactsComponent, FeedbacksComponent, SkillsComponent, NgbdModalFocus]
})
export class SharedModule {
}
