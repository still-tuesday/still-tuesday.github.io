import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BlogPostComponent } from '../blog-post/blog-post.component';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {

  @Input() pictureFirst: boolean;
  @Input() pictureURL: string;
  @Input() postTitle: string;
  @Input() postDescription: string;
  @Input() postURL: string;

  borderOn = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onmouseenter() {
    this.borderOn = true;
    console.log('mouse enter');
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.borderOn = false;
    console.log('mouse leave');
  }

  showPost() {
    const dialogRef = this.dialog.open(BlogPostComponent, {
      width: '750px',
      height: '800px',
      data: {
        postURL: this.postURL
      }
    });
  }

}
