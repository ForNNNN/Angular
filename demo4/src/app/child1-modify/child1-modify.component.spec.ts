import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1ModifyComponent } from './child1-modify.component';

describe('Child1ModifyComponent', () => {
  let component: Child1ModifyComponent;
  let fixture: ComponentFixture<Child1ModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child1ModifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Child1ModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
