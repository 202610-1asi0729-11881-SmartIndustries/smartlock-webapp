import { Component, input } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { Organization } from '../../../domain/model/organization.entity';

@Component({
  selector: 'app-organization-card',
  imports: [MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle],
  templateUrl: './organization-card.html',
  styleUrl: './organization-card.css',
})
export class OrganizationCard {
  readonly organization = input.required<{
    id: number;
    name: string;
    owner: string;
    description: string;
  }>();
}
