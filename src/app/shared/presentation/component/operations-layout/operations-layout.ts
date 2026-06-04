import { Component } from '@angular/core';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-operations-layout',
  imports: [
    MatIcon,
    MatButton,
    RouterLinkActive,
    RouterLink,
    MatDrawerContent,
    MatDrawerContainer,
    MatDrawer,
    RouterOutlet
  ],
  templateUrl: './operations-layout.html',
  styleUrl: './operations-layout.css',
})
export class OperationsLayout {
  protected items = [
    { label: "Dashboard", icon: "dashboard", route: "dashboard"},
    { label: "People", icon: "accessibility_new", route: "people"},
    { label: "Devices", icon: "door_back", route: "devices"},
    { label: "Sites", icon: "corporate_fare", route: "sites"},
    { label: "Groups", icon: "group", route: "access-groups"},
    { label: "Events", icon: "history", route: "access-events"},
    { label: "Alerts", icon: "warning", route: "alerts"},
    { label: "Administrators", icon: "shield_person", route: "administrators"},
    { label: "Roles", icon: "badge", route: "roles"},
  ];
}
