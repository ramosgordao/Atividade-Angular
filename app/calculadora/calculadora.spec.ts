import { ComponentFixture, TestBed } from '@angular/core/testing';

import { calculadora } from './calculadora';

describe('Calculadora', () => {
  let component: calculadora;
  let fixture: ComponentFixture<calculadora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [calculadora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(calculadora);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
