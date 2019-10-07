import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFormTwoComponent } from './sub-form-two.component';

describe('SubFormTwoComponent', () => {
  let component: SubFormTwoComponent;
  let fixture: ComponentFixture<SubFormTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubFormTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
