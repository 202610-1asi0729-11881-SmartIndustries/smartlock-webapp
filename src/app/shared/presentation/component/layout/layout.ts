import {Component, inject} from '@angular/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {Router, RouterOutlet} from '@angular/router';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatDivider} from '@angular/material/list';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    LanguageSwitcher,
    RouterOutlet,
    MatMenuTrigger,
    MatMenu,
    MatDivider,
    MatMenuItem,
    TranslatePipe,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  protected router = inject(Router);

  navigateTo(rute: string){
    this.router.navigate([rute]).then();
  }
}
