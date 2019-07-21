import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplecationComponent } from './multiplecation.component';

describe('MultiplecationComponent', () => {
  let component: MultiplecationComponent;
  let fixture: ComponentFixture<MultiplecationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplecationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplecationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
