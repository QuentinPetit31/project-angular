import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-article',
  imports: [CommonModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css',
})
export class AddArticleComponent {
  @Output() articleCreated = new EventEmitter<{
    title: string;
    content: string;
    author: string;
    date: Date;
    type: string;
  }>();

  titre: string = '';
  contenu: string = '';

  onArticleAdded() {
    if (this.titre && this.contenu)
      this.articleCreated.emit({
        title: this.titre,
        content: this.contenu,
        author: 'Anonyme',
        date: new Date(),
        type: 'article',
      });
  }

  onBrouillonAdded() {
    if (this.titre && this.contenu)
      this.articleCreated.emit({
        title: this.titre,
        content: this.contenu,
        author: 'Anonyme',
        date: new Date(),
        type: 'brouillon',
      });
  }
}
