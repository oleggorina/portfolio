import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MatButtonModule, NgClass],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  @Input() title: string = '';
  @Input() stack: string = '';
  @Input() functional: string = '';
  @Input() demo: string = '';
  @Input() code: string = '';
}
