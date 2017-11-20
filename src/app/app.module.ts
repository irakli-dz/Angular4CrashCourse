import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { StringHarmonizerComponent } from './string-harmonizer/string-harmonizer.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    StringHarmonizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
