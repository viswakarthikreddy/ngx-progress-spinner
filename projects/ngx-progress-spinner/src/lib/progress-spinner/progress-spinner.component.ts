import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  standalone: true,
  imports: [],
  templateUrl: './progress-spinner.component.html',
  styleUrl: './progress-spinner.component.scss'
})
export class ProgressSpinnerComponent {
  @Input() percentage: number = 0;
  @Input() color: string = '#3498db';
  @Input() width: number = 36;
  @Input() height: number = 36;
  dashArray: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.updateDashArray();
  }

  private updateDashArray(): void {
    const circumference = 2 * Math.PI * 15.9155;
    const dashArrayValue = (this.percentage / 100) * circumference;
    this.dashArray = `${dashArrayValue} ${circumference}`;
  }
}
