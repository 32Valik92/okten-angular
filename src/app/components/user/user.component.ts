import {Component, Input} from '@angular/core';
import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user: IUser

  // activatedRoute - це та поточна урла
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  getDetails(): void {
    // Ми додаємо параметр id до relativeTo: this.activatedRoute - це поточна урла
    this.router.navigate([this.user.id], {
      relativeTo: this.activatedRoute,
      // Передаємо з урлою state, аля наповнення
      state: this.user
    })
  }
}
