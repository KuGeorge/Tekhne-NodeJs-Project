import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPhoneListComponent } from './smart-phone-list.component';

describe('SmartPhoneListComponent', () => {
  let component: SmartPhoneListComponent;
  let fixture: ComponentFixture<SmartPhoneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPhoneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPhoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
