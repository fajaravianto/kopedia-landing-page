import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecosystem } from './ecosystem';

describe('Ecosystem', () => {
  let component: Ecosystem;
  let fixture: ComponentFixture<Ecosystem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecosystem],
    }).compileComponents();

    fixture = TestBed.createComponent(Ecosystem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
