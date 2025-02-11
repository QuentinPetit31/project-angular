import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneFriendComponent } from '../onefriend/onefriend.component';

@Component({
  selector: 'app-listfriend',
  standalone: true,
  imports: [CommonModule, OneFriendComponent],
  templateUrl: './listfriend.component.html',
  styleUrls: ['./listfriend.component.css'],
})
export class ListFriendComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = true;
    }, 3000);
  }

  isDisabled = false;

  friend = [
    {
      name: 'Eddie Murphy',
      age: 63,
      status: 'online',
      reputation: 8,
      bio: 'Une superstar.',
      passion: ['Surfer sur la mode'],
      image: 'ed1.jpg',
    },
    {
      name: 'Eddie Murphy',
      age: 63,
      status: 'offline',
      reputation: 8,
      bio: 'On ne le présente plus',
      passion: ['Faire du fun'],
      image: 'ed2.webp',
    },
    {
      name: 'Eddie Murphy',
      age: 63,
      status: 'online',
      reputation: 8,
      bio: 'Le boss',
      passion: ['La Zumba'],
      image: 'ed3.jpg',
    },
  ];
}
