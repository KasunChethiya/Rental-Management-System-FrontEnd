import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { AddCustomerComponent } from './page/add-customer/add-customer.component';
import { AddHardwareItemComponent } from './page/add-hardware-item/add-hardware-item.component';
import { RentalFormComponent } from './page/rental-form/rental-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,AddCustomerComponent,AddHardwareItemComponent,RentalFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-management-app';
}
