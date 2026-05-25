import { Component } from '@angular/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    LanguageSwitcher,
    RouterOutlet,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
