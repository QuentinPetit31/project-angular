import { Component } from '@angular/core';
import { AddArticleComponent } from '../add-article/add-article.component';
import { ArticleElementComponent } from '../article-element/article-element.component';
import { NgFor } from '@angular/common';

// Interface pour typer les articles
export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  type: string;
}

@Component({
  selector: 'app-blog-control-center',
  imports: [NgFor, AddArticleComponent, ArticleElementComponent],
  templateUrl: './blog-control-center.component.html',
  styleUrls: ['./blog-control-center.component.css'],
})
export class BlogControlCenterComponent {
  articles: Article[] = [
    {
      id: 1,
      title: 'Mon premier article',
      content: 'Ceci est le contenu de mon premier article.',
      author: 'Auteur 1',
      date: new Date('2023-01-01'),
      type: 'article',
    },
    {
      id: 2,
      title: 'Mon deuxième article',
      content: 'Ceci est le contenu de mon deuxième article.',
      author: 'Auteur 2',
      date: new Date('2023-02-01'),
      type: 'brouillon',
    },
  ];

  // Gestion des articles ajoutés
  onArticleAdded(articleData: {
    title: string;
    content: string;
    author: string;
    date: Date;
    type: string;
  }) {
    //Ici logique qui contruit un objet article et qui le rajoute au tableau
  }

  // Gestion des brouillons ajoutés
  onBrouillonAdded(brouillonData: {
    title: string;
    content: string;
    author: string;
    date: Date;
    type: string;
  }) {
    //Ici logique qui contruit un objet brouillon et qui le rajoute au tableau
  }
}
