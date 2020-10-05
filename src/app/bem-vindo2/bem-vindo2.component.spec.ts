import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemVindo2Component } from './bem-vindo2.component';

describe('BemVindo2Component', () => {
  let component: BemVindo2Component;
  let fixture: ComponentFixture<BemVindo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BemVindo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BemVindo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
