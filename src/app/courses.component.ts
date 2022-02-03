
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    {{ course.title| uppercase | lowercase}} <br/>
    {{course.students | number }} <br/>
    {{ course.rating | number : '3.1-1'}} <br/>
    {{ course.price | currency  :'INR' : true}} <br/>
    {{ course.releaseDate | date: 'longDate' }}
    `
})
export class CoursesComponent {
course = {
    title : "The Angular Tutorial",
    rating: 4.99,
    students:5555,
    price: 100,
    releaseDate : new Date(2021,5,1)
}    


}
