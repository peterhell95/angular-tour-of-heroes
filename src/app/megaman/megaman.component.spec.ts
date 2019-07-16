import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegamanComponent } from './megaman.component';

describe('MegamanComponent', () => {
  let component: MegamanComponent;
  let fixture: ComponentFixture<MegamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
