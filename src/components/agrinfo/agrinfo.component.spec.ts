import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrinfoComponent } from './agrinfo.component';

describe('AgrinfoComponent', () => {
  let component: AgrinfoComponent;
  let fixture: ComponentFixture<AgrinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
