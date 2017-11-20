import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringHarmonizerComponent } from './string-harmonizer.component';

describe('StringHarmonizerComponent', () => {
  let component: StringHarmonizerComponent;
  let fixture: ComponentFixture<StringHarmonizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringHarmonizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringHarmonizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
