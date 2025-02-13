import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { UselessFactService } from '../../service/uselessfact.service';

@Component({
  selector: 'app-uselessfact',
  standalone: true,
  imports: [NgIf],
  templateUrl: './uselessfact.component.html',
  styleUrl: './uselessfact.component.css',
  providers: [UselessFactService],
})
export class UselessFactComponent {
  fact: string = '';
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private uselessFactService: UselessFactService) {}

  ngOnInit(): void {
    this.loadFact();
  }

  loadFact(): void {
    this.uselessFactService
      .getRandomFact()
      .then((data) => {
        console.log(data);
        this.fact = data.text;
        this.isLoading = false;
      })
      .catch((error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      });
  }
}
