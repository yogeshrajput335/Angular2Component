import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestattributeComponent } from './testattribute.component';

describe('TestattributeComponent', () => {
  let component: TestattributeComponent;
  let fixture: ComponentFixture<TestattributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestattributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestattributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
