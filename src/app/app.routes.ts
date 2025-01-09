import { Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';

export const routes: Routes = [
    {path:"primero",component:FirstComponentComponent},
    {path:"segundo",component:SecondComponentComponent},
    {path:"tercero",component:ThirdComponentComponent},
    
];
