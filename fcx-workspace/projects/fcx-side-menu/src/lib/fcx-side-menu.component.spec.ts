import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcxSideMenuComponent } from './fcx-side-menu.component';

describe('FcxSideMenuComponent', () => {
  let component: FcxSideMenuComponent;
  let fixture: ComponentFixture<FcxSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FcxSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcxSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
