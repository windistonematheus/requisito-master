import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-mug',
  templateUrl: './mug.component.html',
  styleUrls: ['./mug.component.css']
})
export class MugComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Caneca 1', cols: 1, rows: 1, image: "assets/images/caneca.jpg" },
          { title: 'Caneca 2', cols: 1, rows: 1, image: "assets/images/caneca.jpg" },
          { title: 'Caneca 3', cols: 1, rows: 1, image: "assets/images/caneca.jpg" },
          { title: 'Caneca 4', cols: 1, rows: 1, image: "assets/images/caneca.jpg" }
        ];
      }

      return [
        { title: 'Caneca 1', cols: 2, rows: 1, image: "assets/images/caneca.jpg" },
        { title: 'Caneca 2', cols: 1, rows: 1, image: "assets/images/caneca.jpg" },
        { title: 'Caneca 3', cols: 1, rows: 1, image: "assets/images/caneca.jpg" },
        { title: 'Caneca 4', cols: 1, rows: 1, image: "assets/images/caneca.jpg" }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
