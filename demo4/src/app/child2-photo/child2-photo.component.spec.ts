import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2PhotoComponent } from './child2-photo.component';

describe('Child2PhotoComponent', () => {
  let component: Child2PhotoComponent;
  let fixture: ComponentFixture<Child2PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child2PhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Child2PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
