import { Routes } from "@angular/router";
import { Form1Component } from "./form1/form1.component";

export const formsRoutes: Routes = [
   {
      path: 'form1',
      component: Form1Component
            
   },
   {
      path: '',
      redirectTo: 'form1',
      pathMatch: 'full'
   }
]