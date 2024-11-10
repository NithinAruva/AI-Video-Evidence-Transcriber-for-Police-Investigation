import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  reportGenerated = false;

  constructor(private router: Router) {}
  // Mock function to simulate report generation
  handleReportGenerated() {
    this.reportGenerated = true;
  }

  navigateToQuery() {
    // Navigate to the 'query' route
    this.router.navigate(['/query']);
  }
}
