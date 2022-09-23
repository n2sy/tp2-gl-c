import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
})
export class DetailsCoursePage implements OnInit {
  selectedCourse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseSer: ListCoursesService
  ) {}

  ngOnInit() {
    // this.activatedRoute.params.subscribe({
    //   next: (p: Params) => {
    //     console.log(p.id); // p['id]
    //   },
    // });
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedCourse = this.courseSer.getCourseById(p.get('id'));
        console.log(this.selectedCourse); // p['id]
      },
    });
  }
}
