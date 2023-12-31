import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "src/app/pages/home/home.component";
import {SingleCategoryComponent} from "./pages/single-category/single-category.component";
import {SinglePostComponent} from "./pages/single-post/single-post.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {TermsAndConditionsComponent} from "./pages/terms-and-conditions/terms-and-conditions.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "category", component: SingleCategoryComponent},
  {path: "post", component: SinglePostComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "terms-and-conditions", component: TermsAndConditionsComponent},
  {path: "contact-us", component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
