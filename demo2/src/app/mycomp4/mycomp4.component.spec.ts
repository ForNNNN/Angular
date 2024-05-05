import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycomp4Component } from './mycomp4.component';

describe('Mycomp4Component', () => {
  let component: Mycomp4Component;
  let fixture: ComponentFixture<Mycomp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mycomp4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mycomp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
