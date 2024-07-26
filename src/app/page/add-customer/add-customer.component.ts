import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [NavComponent, HttpClientModule, CommonModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

}
