import { CommonModule } from "@angular/common";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { provideHttpClient } from '@angular/common/http'
import { FeaturedMovieComponent } from "./app/components/featured-movie/featured-movie.component";
import { SearchComponent } from "./app/components/search/search.component";
import { WatchListComponent } from "./app/components/watch-list/watch-list.component";
import { FilterComponent } from "./app/components/filter/filter.component";

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      CommonModule,
      RouterModule.forRoot([
      
        {
          path: "",
          loadComponent: ()=> import("./app/components/layouts/layouts.component")
                        .then(c=> c.LayoutsComponent),
          children: [
            {
              path: "",
              loadComponent:()=> import("./app/components/home/home.component")
                        .then(c=> c.HomeComponent)
            },
           
            {
              path: "featured-movie/:id",
              component: FeaturedMovieComponent
            },
            {
              path: "search",
              component: SearchComponent
            },
            {
              path: "watch-list",
              component: WatchListComponent
            },
          
            {
              path: "search/featured-movie/:movie_id",
              component: FilterComponent
            },

          ]
        },
        {
          path: "**",
          loadComponent: ()=> import("./app/components/not-found/not-found.component")
                        .then(c=> c.NotFoundComponent)
        }
      ]),
      BrowserModule
    )
  ]
})