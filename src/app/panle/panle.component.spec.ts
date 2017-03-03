import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanleComponent } from './panle.component';

describe('PanleComponent', () => {
  let component: PanleComponent;
  let fixture: ComponentFixture<PanleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
