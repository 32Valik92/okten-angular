import {Component} from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  post: IPost

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postsService: PostsService) {
    this.activatedRoute.params.subscribe(({id}) => {
      // Той post, якого ми передали з post.component.ts
      const state = this.router.getCurrentNavigation()?.extras.state as IPost;
      if (state) {
        this.post = state;
      } else {
        this.postsService.getById(id).subscribe(value => this.post = value)
      }
    })
  }

}
