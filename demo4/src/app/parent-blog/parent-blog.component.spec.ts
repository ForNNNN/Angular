import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBlogComponent } from './parent-blog.component';

describe('ParentBlogComponent', () => {
  let component: ParentBlogComponent;
  let fixture: ComponentFixture<ParentBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
