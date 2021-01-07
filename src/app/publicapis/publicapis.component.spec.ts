import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicapisComponent } from './publicapis.component';

describe('PublicapisComponent', () => {
  let component: PublicapisComponent;
  let fixture: ComponentFixture<PublicapisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicapisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
