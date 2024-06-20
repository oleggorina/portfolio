import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-indicator',
  standalone: true,
  imports: [],
  templateUrl: './indicator.component.html',
  styleUrl: './indicator.component.scss'
})
export class IndicatorComponent {
  @Input() isActive: boolean = false;
}
