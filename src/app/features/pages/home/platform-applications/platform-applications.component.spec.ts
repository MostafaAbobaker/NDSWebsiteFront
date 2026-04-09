import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLATFORMAPPLICATIONSComponent } from './platform-applications.component';

describe('PLATFORMAPPLICATIONSComponent', () => {
  let component: PLATFORMAPPLICATIONSComponent;
  let fixture: ComponentFixture<PLATFORMAPPLICATIONSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLATFORMAPPLICATIONSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PLATFORMAPPLICATIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
