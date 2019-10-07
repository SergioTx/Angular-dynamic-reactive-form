import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sub-form-one',
  templateUrl: './sub-form-one.component.html',
  styleUrls: ['./sub-form-one.component.css']
})
export class SubFormOneComponent implements OnInit {
  @Input() formArray: FormArray;
  fGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.fGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.formArray.push(this.fGroup);
  }
}
