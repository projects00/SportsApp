import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { register } from '../model/register';
import { AdminService } from '../service/admin.service';
import { ValidationService } from '../service/validation.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;
  fb1: FormBuilder;

  unamePattern = "^[a-z0-9_-]{6,15}$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private router: Router, private adminService: AdminService, private validationService: ValidationService, fb: FormBuilder) {
    this.fb1 = fb;
    this.initilizeFrom();
  }

  ngOnInit() {
  }

  initilizeFrom() {
    this.registerForm = this.fb1.group({
      'rfirstName': [null, Validators.required],
      'rlastName': [null, Validators.required],
      'ruserName': [null, Validators.compose([Validators.required, Validators.pattern(this.unamePattern)])],
      'remail': [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      'rphoneNumber': [null, Validators.compose([Validators.required, Validators.pattern(this.mobnumPattern)])],
      'rterms': [null, Validators.required],
      matchingPassword: this.fb1.group({
        rpassword: ['', Validators.required],
        rconfirmPassword: ['', Validators.required],
      }, { validator: this.fieldMatcher('rpassword', 'rconfirmPassword') })
    });
    this.loginForm = this.fb1.group({
      'logemail': [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      'logpass': [null, Validators.compose([Validators.required])],
    });
  }

  fieldMatcher(value1: string, value2: string) {
    return (group: FormGroup) => {
      if (group.controls[value1].value !== group.controls[value2].value) {
        return group.controls[value2].setErrors({ notEquivalent: true })
      }
    }
  }


  userSave() {
    const dd = this.registerForm.value.rfirstName;
  }


  isAuthenticated() {
    this.adminService.isAuthenticatred().subscribe(data => {
      console.log(data);

    }, error => {
      return null

    });
  }

  onClick(): void {
    //
    // logIn
   // this.router.navigateByUrl('admin');
   this.adminService.logIn(this.loginForm.value.logemail, this.loginForm.value.logpass).subscribe(data => {
debugger;
       if (data.role==1){
     this.router.navigateByUrl('admin');
      this.adminService.isAuthenticated=true;
       }
      else
       {
      this.adminService.logbtn=true;
         this.router.navigateByUrl('home');
        this.isAuthenticated();
       this.adminService.isAuthenticated=true;
       }
     this.isAuthenticated();
   }, error => {
     return null

   });
  }
}
