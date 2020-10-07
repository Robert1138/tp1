import { Component, OnInit } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  images = [
    {path: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/J-3005.jpg/1024px-J-3005.jpg"},
    {path: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg/800px-US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg"},
    {path: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/1024px-F-16_June_2008.jpg"},
    {path: "https://upload.wikimedia.org/wikipedia/commons/d/de/Lockheed_XF-104_%28modified%29.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
