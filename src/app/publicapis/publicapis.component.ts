import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PublicapisService } from '../services/publicapis.service';
import { map, share, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-publicapis',
  templateUrl: './publicapis.component.html',
  styleUrls: ['./publicapis.component.css'],
})
export class PublicapisComponent implements OnInit {
  categories$: Observable<string[]>;
  search$ = new BehaviorSubject("");
  categoriesVal$: Observable<string[]>;

  constructor(private publicapisService: PublicapisService) {}

  ngOnInit(): void {
    this.categoriesVal$ = this.publicapisService.getCategories();
    this.categories$ = this.search$.pipe(switchMap(resp => {
      if (resp.length === 0) {
        return this.categoriesVal$
      } else {
        return this.categoriesVal$.pipe(map(item => {
          return item.filter(result => {
            const key = [result];
            return key.some(attr => attr.toLowerCase().includes(resp.toLowerCase()));
          });
        }));
      }
    }));
  }

  filter(val: string) {
      this.search$.next(val);
  }
}
