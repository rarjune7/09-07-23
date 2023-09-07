import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SightsComponent } from './sights/sights.component';
import { GeographyComponent } from './geography/geography.component';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CommunityComponent } from './community/community.component';
import { HousingComponent } from './housing/housing.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { PlacesComponent } from './places/places.component';
import { ParksComponent } from './parks/parks.component';
import { SchoolsComponent } from './schools/schools.component';
import { ShoppingDiningComponent } from './shopping-dining/shopping-dining.component';
import { TransportationComponent } from './transportation/transportation.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    SightsComponent,
    GeographyComponent,
    LandmarksComponent,
    ActivitiesComponent,
    CommunityComponent,
    HousingComponent,
    DemographicsComponent,
    PlacesComponent,
    ParksComponent,
    SchoolsComponent,
    ShoppingDiningComponent,
    TransportationComponent,
    ContactComponent,
    HomeComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/