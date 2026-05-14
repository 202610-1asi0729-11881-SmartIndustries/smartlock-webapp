import { Component, signal } from '@angular/core';
import { HeaderBar } from '../../../../shared/presentation/components/header-bar/header-bar';
import { OrganizationCard } from '../../components/organization-card/organization-card';
import { Organization } from '../../../domain/model/organization.entity';

@Component({
  selector: 'app-organizations-list',
  imports: [HeaderBar, OrganizationCard],
  templateUrl: './organizations-list.html',
  styleUrl: './organizations-list.css',
})
export class OrganizationsList {
  organizations = [
    {
      id: 1,
      name: 'Technova Solutions',
      owner: 'Carla Rivas',
      description: 'Software company focused on cloud platforms and enterprise solutions.',
    },
    {
      id: 2,
      name: 'InnovaSoft Labs',
      owner: 'Diego Salazar',
      description: 'Technology company specialized in scalable infrastructure and DevOps services.',
    },
    {
      id: 3,
      name: 'CloudForge Systems',
      owner: 'Carla Rivas',
      description: 'Innovation-driven startup building modern web and mobile applications.',
    },
  ];
}
