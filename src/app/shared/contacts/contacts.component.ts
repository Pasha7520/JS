import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../../Contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input()
  contactsId: string;
  @Input()
  contactsHeader: string;
  @Input()
  contacts: Contact[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
