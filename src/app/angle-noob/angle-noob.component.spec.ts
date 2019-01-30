import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleNoobComponent } from './angle-noob.component';

describe('AngleNoobComponent', () => {
  let component: AngleNoobComponent;
  let fixture: ComponentFixture<AngleNoobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngleNoobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleNoobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
