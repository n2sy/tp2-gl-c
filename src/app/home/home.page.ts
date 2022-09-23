import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tabCourses = [];

  constructor(private courseService: ListCoursesService) {
    //this.tabCourses = this.courseService.getAllCourses();
  }

  ngOnInit(): void {
    this.tabCourses = this.courseService.getAllCourses();
  }
}
