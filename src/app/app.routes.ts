import { Routes } from '@angular/router';
import { AddCustomerComponent } from './page/add-customer/add-customer.component';
import { AddHardwareItemComponent } from './page/add-hardware-item/add-hardware-item.component';
import { RentalFormComponent } from './page/rental-form/rental-form.component';

export const routes: Routes = [
    {
        path:"add-customer",
        component:AddCustomerComponent
    }
    {
        path:"add-hardware-item",
        component:AddHardwareItemComponent
    }
    {
        path:"rental-form",
        component:RentalFormComponent
    }
];
