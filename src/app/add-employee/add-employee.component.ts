import { Employee } from './../employee';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee;
  constructor() {
    this.employee = new Employee();

  }

  ngOnInit() {
  }

  addEmployee(value: FormsModule) {
    console.log('Employee ', this.employee);
  }
}
