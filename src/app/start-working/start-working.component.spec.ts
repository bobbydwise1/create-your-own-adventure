import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWorkingComponent } from './start-working.component';

describe('StartWorkingComponent', () => {
  let component: StartWorkingComponent;
  let fixture: ComponentFixture<StartWorkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartWorkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
