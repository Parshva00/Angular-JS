import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  template:`
  <h2>{{"title"}}</h2>
  `
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
