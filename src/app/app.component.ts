import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressSpinnerComponent } from '../../projects/ngx-progress-spinner/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-form';
}
