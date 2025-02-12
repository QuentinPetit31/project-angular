import { Component, Input } from '@angular/core';
import { Article } from '../blog-control-center/blog-control-center.component';

@Component({
  selector: 'app-article-element',
  imports: [],
  templateUrl: './article-element.component.html',
  styleUrl: './article-element.component.css',
})
export class ArticleElementComponent {
  @Input() article!: Article;
}
