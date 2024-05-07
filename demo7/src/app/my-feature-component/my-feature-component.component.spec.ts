import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFeatureComponentComponent } from './my-feature-component.component';

describe('MyFeatureComponentComponent', () => {
  let component: MyFeatureComponentComponent;
  let fixture: ComponentFixture<MyFeatureComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyFeatureComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFeatureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
