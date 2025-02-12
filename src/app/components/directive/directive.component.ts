import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent {
  afficherDetails = false;
  nombreClique: number[] = [];

  repeterAffichage() {
    this.afficherDetails = !this.afficherDetails;
    this.nombreClique.push(this.nombreClique.length + 1);
  }
}
