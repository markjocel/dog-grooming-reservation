import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent implements OnInit {
  data: any;

  constructor(private router: Router) { 
    // Access the state data
    const navigation = this.router.getCurrentNavigation();
    console.warn(this.router)
    console.warn(this.router.getCurrentNavigation())
    if (navigation?.extras.state) {
      this.data = navigation.extras.state.data;
    } else {
      console.warn('No state data found!');
    }}

  ngOnInit() {
  }

}
