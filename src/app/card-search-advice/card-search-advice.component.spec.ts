import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchAdviceComponent } from './card-search-advice.component';

describe('CardSearchAdviceComponent', () => {
  let component: CardSearchAdviceComponent;
  let fixture: ComponentFixture<CardSearchAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSearchAdviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSearchAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
