import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_docker_app';

  constructor(private router: Router){

  }

  handleClick(category: string): void {    
    this.router.navigate([`products/${category}`]); // Navigate to the category route
  }
}
