import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // Змінні, які в нас є в компоненті
  // @Input() каже, що наступна змінна буде прийматися від батька(типу props)
  @Input()
  user: IUser;

  // @Output() декоратор, щоб віддати на ззовні
  @Output()
    // По суті ми створили новий event
  liftUser = new EventEmitter<IUser>();

  // Метод, який з компоненти user викидає на верх до userS, де приймається наш користувач і записується в компоненті
  // userS до поля user
  getDetails(): void {
    this.liftUser.emit(this.user); // emit - це видати, видаємо на верх
  }
}
