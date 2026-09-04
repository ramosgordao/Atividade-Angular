import { ComponentFixture, TestBed } from '@angular/core/testing';

import { temperatura } from './temperatura';

describe('Temperatura', () => {
  let component: temperatura;
  let fixture: ComponentFixture<temperatura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [temperatura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(temperatura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
