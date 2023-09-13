import {Component, Input} from '@angular/core';
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  // Змінні, які в нас є в компоненті
  @Input()
  user: IUser
}
