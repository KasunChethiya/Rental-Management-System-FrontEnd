import { Component } from '@angular/core';
import { NavComponent } from "../../common/nav/nav.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-hardware-item',
  standalone: true,
  imports: [NavComponent, HttpClientModule, CommonModule],
  templateUrl: './add-hardware-item.component.html',
  styleUrl: './add-hardware-item.component.css'
})
export class AddHardwareItemComponent {

}
