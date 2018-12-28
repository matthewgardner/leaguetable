import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataService } from './data.service';
import { tap } from 'rxjs/operators';
export interface LeaguePlayers {
  name: string;
  position: number;
  played: number;
  kills: number;
  killsratio?: number;
}

// const LEAGUE_DATA: LeaguePlayers[] = [
//   { position: 9, name: 'Samuel', played: 1, kills: 3 },
//   { position: 9, name: 'Adam', played: 2, kills: 2 },
//   { position: 9, name: 'Ruzgar', played: 3, kills: 2 },
//   { position: 9, name: 'Billy', played: 2, kills: 2 },
//   { position: 9, name: 'Bobby', played: 2, kills: 2 },
//   { position: 9, name: 'Charlie', played: 3, kills: 3 },
//   { position: 9, name: 'Jeff', played: 1, kills: 3 },
//   { position: 9, name: 'Mossue', played: 2, kills: 3 },
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Fortnite League';
  displayedColumns: string[] = [
    'position',
    'name',
    'played',
    'kills',
    'killsratio',
  ];
  dataSource = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.getLeaguePlayers().subscribe(x => (this.dataSource = x));

    this.dataService.getLeaguePlayers().subscribe(x => {
      // Calc Kill Ratio
      x.forEach(item => {
        item.killsratio = item.kills / item.played;
      });

      // Sort by Kill Ratio
      x.sort((a, b) =>
        a.killsratio > b.killsratio ? -1 : a.killsratio < b.killsratio ? 1 : 0,
      );

      // Set position in list
      x.forEach((item, index) => {
        item.position = index + 1;
      });
      this.dataSource = x;
    });
  }
}
