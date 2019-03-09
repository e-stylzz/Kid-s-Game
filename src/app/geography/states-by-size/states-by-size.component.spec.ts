import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesBySizeComponent } from './states-by-size.component';

describe('StatesBySizeComponent', () => {
  let component: StatesBySizeComponent;
  let fixture: ComponentFixture<StatesBySizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesBySizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesBySizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
