import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shadow',
  standalone: true,
  imports: [NgClass],
  templateUrl: './shadow.component.html',
  styleUrl: './shadow.component.scss'
})
export class ShadowComponent {
  @Input() positionClass: string = '';
}
