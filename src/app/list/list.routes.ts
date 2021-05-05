import { Routes } from "@angular/router";
import { ListDetailComponent } from "./list-detail/list-detail.component";
import { ListHomeComponent } from "./list-home/list-home.component";

export const listRoutes: Routes = [
   {
      path: "list-home",
      component: ListHomeComponent
   },
   {
      path: "list-detail",
      component: ListDetailComponent
   },
   {
      path: '',
      pathMatch: 'Full',
      redirectTo:'list-home'
   }
]