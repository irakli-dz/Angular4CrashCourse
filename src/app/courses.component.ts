import {Component} from '@angular/core';
import { CourseService } from './courses.service';


@Component ({
    selector: 'courses',
    template: `<button class="btn btn-primary">Save</button>`
})
export class CoursesComponent {

    title = 'List of courses';
    courses;

    constructor( service: CourseService) {
        
        this.courses = service.getCourses();
    }

}
