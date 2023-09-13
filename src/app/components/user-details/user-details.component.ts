import {Component} from '@angular/core';
import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: IUser

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    // Ми слідкуємо за параметром весь час, бо subscribe()=станція, і кожен раз як зміниться щось ми робимо запит повторно
    this.activatedRoute.params.subscribe(({id}) => {
      // Той користувач, якого ми передали з user.component.ts через state
      const state = this.router.getCurrentNavigation()?.extras.state as IUser;

      if (state) {
        this.user = state;
      } else {
        this.userService.getById(id).subscribe(value => this.user = value);
      }

    })
  }
}
