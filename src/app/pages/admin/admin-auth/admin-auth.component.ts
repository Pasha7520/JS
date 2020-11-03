import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthAdminService} from "../auth-admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  user = {
    name: "",
    password: ""
  };

  constructor(private authAdminService: AuthAdminService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onFormSubmit(f: NgForm) {
    if (this.authAdminService.validPassword(f.value.password)) {
      this.router.navigate(['/admin/edit']);
    }
  }
}
