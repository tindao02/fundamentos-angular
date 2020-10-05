import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemVindo3Component } from './bem-vindo3.component';

describe('BemVindo3Component', () => {
  let component: BemVindo3Component;
  let fixture: ComponentFixture<BemVindo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BemVindo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BemVindo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
