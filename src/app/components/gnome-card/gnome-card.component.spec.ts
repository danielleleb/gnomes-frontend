import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeCardComponent } from './gnome-card.component';

describe('GnomeCardComponent', () => {
  let component: GnomeCardComponent;
  let fixture: ComponentFixture<GnomeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
