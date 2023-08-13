import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
//import * as feather from 'feather-icons';
const feather = require('feather-icons');   //npm i --save-dev @types/feather-icons  
import Swal from 'sweetalert2'
import {Location} from "@angular/common";
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
  
})
export class AppComponent {

  name = 'Angular ' + VERSION.major;  
  title = 'customerportal';
    constructor(private _translate: TranslateService) {
    _translate.addLangs(['en', 'hi']);
    _translate.setDefaultLang('en');

  }

}


