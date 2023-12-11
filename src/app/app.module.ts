import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layouts/header/header.component';
import {CategoryNavbarComponent} from './layouts/category-navbar/category-navbar.component';
import {SingleCategoryComponent} from './pages/single-category/single-category.component';
import {TermsAndConditionsComponent} from './pages/terms-and-conditions/terms-and-conditions.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {SubscriptionFormComponent} from './subscription-form/subscription-form.component';
import {CommentFormComponent} from './comments/comment-form/comment-form.component';
import {CommentListComponent} from './comments/comment-list/comment-list.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {SinglePostComponent} from './pages/single-post/single-post.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {HomeComponent} from "./pages/home/home.component";
import { PostCardComponent } from './layouts/post-card/post-card.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    HomeComponent,
    SingleCategoryComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    FooterComponent,
    SinglePostComponent,
    AboutUsComponent,
    PostCardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
