import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionnementComponent } from './fonctionnement.component';

describe('FonctionnementComponent', () => {
  let component: FonctionnementComponent;
  let fixture: ComponentFixture<FonctionnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonctionnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FonctionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
