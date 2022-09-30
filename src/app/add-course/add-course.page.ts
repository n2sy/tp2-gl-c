import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  defaultName = 'Ahdy';
  constructor(private courseSer: ListCoursesService, private router: Router) {}

  ngOnInit() {}

  onSubmit(valueForm) {
    valueForm.keywords = valueForm.keywords.split(',');
    this.courseSer.addCourse(valueForm);
    this.router.navigateByUrl('/');
  }

  onReset(f: NgForm) {
    f.reset();
  }
}
