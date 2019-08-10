import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SareeDetailsComponent } from './saree-details.component';

describe('SareeDetailsComponent', () => {
  let component: SareeDetailsComponent;
  let fixture: ComponentFixture<SareeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SareeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SareeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
