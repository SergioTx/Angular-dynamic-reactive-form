import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormOneComponent } from './sub-form-one.component';

describe('SubFormOneComponent', () => {
  let component: SubFormOneComponent;
  let fixture: ComponentFixture<SubFormOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubFormOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
