import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seguro } from './seguro';

describe('Seguro', () => {
  let component: seguro;
  let fixture: ComponentFixture<seguro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [seguro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(seguro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
