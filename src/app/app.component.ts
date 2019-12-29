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
