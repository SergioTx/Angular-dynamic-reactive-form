import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sub-form-two',
  templateUrl: './sub-form-two.component.html',
  styleUrls: ['./sub-form-two.component.css']
})
export class SubFormTwoComponent implements OnInit {
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
