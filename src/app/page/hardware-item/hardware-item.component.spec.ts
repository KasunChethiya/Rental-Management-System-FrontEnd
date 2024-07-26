import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareItemComponent } from './hardware-item.component';

describe('HardwareItemComponent', () => {
  let component: HardwareItemComponent;
  let fixture: ComponentFixture<HardwareItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardwareItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HardwareItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
