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

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

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

      }.bind(this));
    }.bind(this));
  }

}
