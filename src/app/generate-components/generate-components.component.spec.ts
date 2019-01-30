import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateComponentsComponent } from './generate-components.component';

describe('GenerateComponentsComponent', () => {
  let component: GenerateComponentsComponent;
  let fixture: ComponentFixture<GenerateComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
