import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHardwareItemComponent } from './add-hardware-item.component';

describe('AddHardwareItemComponent', () => {
  let component: AddHardwareItemComponent;
  let fixture: ComponentFixture<AddHardwareItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHardwareItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHardwareItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
