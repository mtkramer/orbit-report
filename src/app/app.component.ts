import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  log: string;
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    this.sourceList = [];
    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {

        for (let sat of data.satellites) {
          this.sourceList.push(new Satellite(
            sat.name,
            sat.type,
            sat.orbitType,
            sat.launchDate,
            sat.operational
          ));
        }
        this.displayList = this.sourceList;

      }.bind(this));
    }.bind(this));
  }

  search(searchTerm: string): void {
    searchTerm = searchTerm.toLowerCase();
    if (searchTerm) {
      this.displayList = [];
      for (let sat of this.sourceList) {
        sat.name.toLowerCase() === searchTerm ? this.displayList.push(sat) : null;
      }
    }
    else {
      this.displayList = this.sourceList;
      window.alert("No search terms entered");
    }
    if (this.displayList.length === 0) {
      this.displayList = this.sourceList;
      window.alert("No matches to that search");
    }
  }

}
