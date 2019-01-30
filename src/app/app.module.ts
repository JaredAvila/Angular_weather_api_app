import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ResultsComponent } from "./results/results.component";
import { HomeComponent } from "./home/home.component";

import { DataServiceService } from "./data-service.service";

@NgModule({
  declarations: [AppComponent, ResultsComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
