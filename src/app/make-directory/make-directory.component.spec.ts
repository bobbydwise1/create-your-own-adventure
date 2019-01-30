import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDirectoryComponent } from './make-directory.component';

describe('MakeDirectoryComponent', () => {
  let component: MakeDirectoryComponent;
  let fixture: ComponentFixture<MakeDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
