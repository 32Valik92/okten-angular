import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

// Всі запити які робляться при ініціалізації компоненти потребують імплементацію OnInit.
// (В методі ngOnInit робляться самі запити)
export class UsersComponent implements OnInit {
  // Змінні, які в нас є в компоненті
  users: IUser[];
  user: IUser;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    //.subscribe() - ми підписалися на радіостанцію та хочемо отримати дані. value - дані, які ми присвоюємо змінним
    this.userService.getAll().subscribe(value => this.users = value);
  }

  getUser(user: IUser) {
    this.user = user
  }
}
