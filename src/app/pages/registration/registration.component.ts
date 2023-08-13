import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { MustMatchValidator } from 'src/app/shared/validation/validation.validator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor(private _dataService: HttpService, private _fb: FormBuilder, private _toastr: ToastrService) {
 
  }
  createRegisterForm() {
    this.registerForm = this._fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatchValidator('password', 'confirmPassword')
    });
    this.registerForm.reset();
  }
  ngOnInit() {
    this.createRegisterForm();
  }
   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

  onSubmit(formData: any) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this._dataService.post(environment.BASE_API_PATH + "CustomerMaster/Save/", formData.value).subscribe(
      data => {
        if (data.isSuccess) {
          this._toastr.info('Data saved successfully! ', 'CREATE ACCOUNT');
          this.registerForm.reset();
        } else {
          this._toastr.error(data.errors[0], 'CREATE ACCOUNT');
        }
      }
    );
  }

}

