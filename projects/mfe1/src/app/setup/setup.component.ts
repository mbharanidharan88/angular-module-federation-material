import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent {
  firstFormGroup: FormGroup
  secondFormGroup: FormGroup

  constructor(private _formBuilder: FormBuilder)
  {
    this.firstFormGroup = this._formBuilder.group({firstCtrl: ['']});
    this.secondFormGroup = this._formBuilder.group({secondCtrl: ['']});
  }

}
