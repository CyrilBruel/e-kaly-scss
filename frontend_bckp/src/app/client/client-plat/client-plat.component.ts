import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-client-plat',
  templateUrl: './client-plat.component.html',
  styleUrls: ['./client-plat.component.scss']
})
export class ClientPlatComponent implements OnInit {
  lnk= ["https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg", "https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg", "https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg", "https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg", "https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg"];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  inprogress = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];

  constructor() {
   }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
