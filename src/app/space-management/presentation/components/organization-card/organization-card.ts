import {Component, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-organization-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './organization-card.html',
  styleUrl: './organization-card.css',
})
export class OrganizationCard {
  organization = input.required<{name: string, owner: string, description: string}>();
}
