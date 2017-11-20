// tslint:disable:no-trailing-whitespace

import {Component} from '@angular/core';
import { CourseService } from './courses.service';


@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `<input (keyup.enter)="onKeyUp()" />`
})
export class CoursesComponent {

    title = 'List of courses';
    courses;

    constructor( service: CourseService) {
       
       
        this.courses = service.getCourses();
    }

    onKeyUp() {
        
            console.log('ENTER was pressed');
    
}

}
