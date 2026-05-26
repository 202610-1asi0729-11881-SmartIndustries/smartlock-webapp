import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {
  OrganizationCard
} from '../../../../space-management/presentation/components/organization-card/organization-card';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [
    MatIcon,
    MatButton,
    OrganizationCard,
    TranslatePipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  organizationsList = [
    {name: "Organization1", owner: "user1", description: "Empresa innovadora dedicada a c rear soluciones tecnológicas personalizadas. Impulsamos el crecimiento de tu negocio mediante estrategias digitales eficientes, garantizando calidad"},
    {name: "Organization2", owner: "user2", description: "Empresa innovadora dedicada a c rear soluciones tecnológicas personalizadas. Impulsamos el crecimiento de tu negocio mediante estrategias digitales eficientes, garantizando calidad"},
    {name: "Organization3", owner: "user3", description: "Empresa innovadora dedicada a c rear soluciones tecnológicas personalizadas. Impulsamos el crecimiento de tu negocio mediante estrategias digitales eficientes, garantizando calidad"},
    {name: "Organization4", owner: "user4", description: "Empresa innovadora dedicada a c rear soluciones tecnológicas personalizadas. Impulsamos el crecimiento de tu negocio mediante estrategias digitales eficientes, garantizando calidad"},
  ]
}
