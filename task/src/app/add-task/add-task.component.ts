import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  hours: number = 0
  minuts: number = 0
  second: number = 0
  ngOnInit(): void {
    this.getTime()
  }

  getTime() {
    setInterval(() => {
      var date = new Date();
      this.hours = date.getHours()
      this.minuts = date.getMinutes()
      this.second = date.getSeconds()
    }, 1000);
  }

}