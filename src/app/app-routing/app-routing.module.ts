import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MovielistComponent } from "../movie/movielist/movielist.component";
import { MoviedetailComponent } from "../movie/moviedetail/moviedetail.component";

const routes: Routes = [
  {
    path: "movie",
    children: [
      {
        path: "list",
        component: MovielistComponent
      },
      {
        path: "detail",
        component: MoviedetailComponent,
        outlet: "right"
      },
      {
        path: ":id",
        component: MoviedetailComponent,
        outlet: "right"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
