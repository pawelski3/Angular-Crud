import { Injectable } from '@angular/core';
import { Lookup } from '../models/lookup';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor() { }

  private units: Array<Lookup> = [
    { name: 'PCS', code: "1", category: 1 },
    { name: 'Carton', code: "2", category: 1 },
    { name: 'Gram', code: "3", category: 1 },
    { name: 'Ltr', code: "4", category: 1 },
  ];

  private productCategories: Array<Lookup> = [
    { name: 'Pickles', code: "1", category: 1 },
    { name: 'Rice', code: "2", category: 1 },
    { name: 'Oil', code: "3", category: 1 },
    { name: 'Masala', code: "4", category: 1 },
  ];

  getProductCategories(): Observable<Lookup[]> {
    return of(this.productCategories);
  }

  getUnits(): Observable<Lookup[]> {
    return of(this.units);
  }


}
