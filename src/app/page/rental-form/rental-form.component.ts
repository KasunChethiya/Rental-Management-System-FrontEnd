import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rental-form',
  standalone: true,
  imports: [NavComponent,HttpClientModule,CommonModule],
  templateUrl: './rental-form.component.html',
  styleUrl: './rental-form.component.css'
})
export class RentalFormComponent{
updateRental() {
throw new Error('Method not implemented.');
}
  public rentalObj ={
    rentId:"",
    rentalDate:"",
    returnDate:"",
    dueDate:"",
    fine:"",
    totalCost:""
    
  }
  constructor(private http:HttpClient){}
   addRental(){
    this.http.post("http://localhost:8080/rental-controller/add-rental",this.rentalObj).subscribe(
      (data) => {
        Swal.fire({
          title: "Rental Added!",
          text: "You added the rental successfully!",
          icon: "success"
        });
      }
    )

   }
}

