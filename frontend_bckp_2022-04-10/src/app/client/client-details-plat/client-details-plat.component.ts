import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-details-plat',
  templateUrl: './client-details-plat.component.html',
  styleUrls: ['./client-details-plat.component.scss']
})
export class ClientDetailsPlatComponent implements OnInit {
  lnk= ["https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg", "https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg", "https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg", "https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg", "https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg"];
  e="https://i.ibb.co/jf6j6K6/asparagus-2169305.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
