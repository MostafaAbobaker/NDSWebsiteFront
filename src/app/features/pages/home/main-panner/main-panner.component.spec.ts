import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPannerComponent } from './main-panner.component';

describe('MainPannerComponent', () => {
  let component: MainPannerComponent;
  let fixture: ComponentFixture<MainPannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
