import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomQuoteMachineComponent } from './random-quote-machine.component';

describe('RandomQuoteMachineComponent', () => {
  let component: RandomQuoteMachineComponent;
  let fixture: ComponentFixture<RandomQuoteMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomQuoteMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomQuoteMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
