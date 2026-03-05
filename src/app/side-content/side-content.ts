import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'side-content',
  imports: [MatCardModule],
  templateUrl: './side-content.html',
  styleUrl: './side-content.scss',
})
export class SideContent {}
