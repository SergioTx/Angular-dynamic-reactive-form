import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  selectedType: number = null;

  get subForms() {
    return this.form.controls.subForms as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      type: [this.selectedType, Validators.required],
      subForms: new FormArray([])
    });
  }

  onChangeType() {
    this.subForms.clear();
    this.selectedType = +this.form.get('type').value;
  }

  onSubmit() {
    console.log('submit');
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // display form values on success
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
  }
}
