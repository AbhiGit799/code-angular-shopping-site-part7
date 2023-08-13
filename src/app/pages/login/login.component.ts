import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  strMsg: string;
  submitted = false;

  constructor(private authService: AuthService, private _dataService: HttpService, private _fb: FormBuilder, 
    private _toastr: ToastrService) {
    this.strMsg = "";
    this.authService.logout();
  }

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this._fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  PostData(signupForm: any) {
    if (this.loginForm.valid) {
      this._dataService.post(environment.BASE_API_PATH + "CustomerMaster/Login/", this.loginForm.value).subscribe(
        logindata => {
          if (logindata.isSuccess) {
            this.authService.login(logindata.data);
            this.strMsg = this.authService.getMessage();
            if (this.strMsg != "") {
              this._toastr.error(this.strMsg, "Login");
              this.reset();
            }
          } else {
            this._toastr.error("Invalid Credentials !", "Login");
            this.reset();
          }
        });
    } else {
      this._toastr.error("Login failed !", "Login");
      this.reset();
    }
  }
  reset() {
    this.loginForm.controls['userName'].setValue('');
    this.loginForm.controls['password'].setValue('');
  }


}