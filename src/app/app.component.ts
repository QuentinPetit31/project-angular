import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UselessFactService } from './service/uselessfact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UselessFactService],
})
export class AppComponent implements OnInit {
  title = 'project-angular';
  fact: string = '';

  constructor(private uselessfactService: UselessFactService) {}

  ngOnInit(): void {
    this.fetchFact();
  }

  fetchFact() {
    this.uselessfactService.getRandomFact().then((data: any) => {
      if (data && data.text) {
        this.fact = data.text;
      }
    });
  }
}
