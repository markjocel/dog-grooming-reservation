import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { of, tap, map } from 'rxjs';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {

  reservationForm:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router){

    this.reservationForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      contactNo: new FormControl(''),
      service: new FormControl(''),
      dateTime: new FormControl(''),
      dogName: new FormControl(''),
      dogBreed: new FormControl(''),
      message: new FormControl(''),
    });
  }

  onSubmit(){

    if (this.reservationForm.valid) {
      // Simulate an async operation and navigate after processing
      of(this.reservationForm.value).pipe(
        tap(data => {
          // Perform side effects here if needed
          console.log('Processing data:', data);
        }),
        map(data => {
          // Transform data if needed
          const processed = { ...data, processed: true, timeStamp: new Date().toLocaleString(), fullName: `${data.firstName} ${data.lastName}` };
          console.log(processed)
          return processed;
        })
      ).subscribe(processedData => {
        this.router.navigate(['/confirmation'], { state: { data: processedData } });
      });
    }
  }
}
