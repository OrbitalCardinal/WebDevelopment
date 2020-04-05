import  { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";
  // CONVENTION: You always start with 'on' methods that are triggered with events

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if(form.invalid) return;
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
