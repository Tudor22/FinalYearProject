import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  };

  registerUser(event) {// Registration
    event.preventDefault();
    const errors = [];
    const email = this.model.email;
    const password = this.model.password;
    const cpassword = this.model.cpassword;

    if (password != cpassword) {
      errors.push("Passwords do not match");
    };

    if (errors.length === 0) { //Checks for no errors
      this.auth.registerUser(email, password).subscribe(data => {
        if (data.success) {
          this.router.navigate(['login'])
        }
      });
    };
  };
};
