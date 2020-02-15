import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/home/category/category.component';
import { ItemListComponent } from './pages/home/item-list/item-list.component';
import { ItemComponent } from './pages/item/item.component';
import { ResultComponent } from './pages/item/result/result.component';
import { LiveGuideComponent } from './pages/item/live-guide/live-guide.component';
import { ScientificDetailComponent } from './pages/item/scientific-detail/scientific-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ItemListComponent,
    ItemComponent,
    ResultComponent,
    LiveGuideComponent,
    ScientificDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
