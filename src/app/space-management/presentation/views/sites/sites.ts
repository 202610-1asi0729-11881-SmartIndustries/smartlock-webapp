import {Component} from '@angular/core';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-sites',
  imports: [
    SearchBar,
    TranslatePipe
  ],
  templateUrl: './sites.html',
  styleUrl: './sites.css',
})
export class Sites {}
