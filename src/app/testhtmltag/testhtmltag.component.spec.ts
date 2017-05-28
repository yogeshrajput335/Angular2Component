import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesthtmltagComponent } from './testhtmltag.component';

describe('TesthtmltagComponent', () => {
  let component: TesthtmltagComponent;
  let fixture: ComponentFixture<TesthtmltagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesthtmltagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesthtmltagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
