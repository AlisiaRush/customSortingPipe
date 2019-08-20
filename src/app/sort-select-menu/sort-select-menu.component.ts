import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Pipe } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material';

export interface fillSearch {
  msName: string;

}

/** list of fillSearches */
export const SELECTED_SEARCHES: fillSearch[] = [
  {msName: 'Tom Cruise'},
  {msName: 'Tom Hank'},
  {msName: 'Henry Robinson'},
  {msName: 'Idris Elba'},
  {msName: 'Alisia Rush'},
  {msName: 'Jack WhoKnows'}
];

/** list of fillSearch groups */

@Pipe({
  name: 'orderBy'
})

@Component({
  selector: 'app-sort-select-menu',
  templateUrl: './sort-select-menu.component.html',
  styleUrls: ['./sort-select-menu.component.css']
})
export class SortSelectMenuComponent implements OnInit, AfterViewInit, OnDestroy {
  search: any = []
  searchMulti = []
  order = "name";
  ascending = false;
  constructor(private http: HttpClient) {}

  protected fillSearches: fillSearch[] = SELECTED_SEARCHES;

  /** control for the selected fillSearches for multi-selection */
  public searchSelectMultiCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public searchSelectMultiFilterCtrl: FormControl = new FormControl();

  /** list of fillSearches filtered by search keyword */
  public filteredSearchMulti: ReplaySubject<fillSearch[]> = new ReplaySubject<fillSearch[]>(1);

  @ViewChild('multiSelect',{static: false}) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();


  ngOnInit() {
   // set initial selection
   this.searchSelectMultiCtrl.setValue([this.fillSearches[10], this.fillSearches[11], this.fillSearches[12]]);

   // load the initial fillSearch list
   this.filteredSearchMulti.next(this.fillSearches.slice());

   // listen for search field value changes
   this.searchSelectMultiFilterCtrl.valueChanges
     .pipe(takeUntil(this._onDestroy))
     .subscribe(() => {
       this.filterBanksMulti();
     });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  protected setInitialValue() {
    this.filteredSearchMulti
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.multiSelect.compareWith = (a: fillSearch, b: fillSearch) => a && b && a.msName === b.msName;
      });
  }

  protected filterBanksMulti() {
    if (!this.fillSearches) {
      return;
    }
    // get the search keyword
    let search = this.searchSelectMultiFilterCtrl.value;
    if (!search) {
      this.filteredSearchMulti.next(this.fillSearches.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the fillSearches
    this.filteredSearchMulti.next(
      this.fillSearches.filter(msSearch => msSearch.msName.toLowerCase().indexOf(search) > -1)
    );
  }

search2(){
  this.http.get('https://jsonplaceholder.typicode.com/users/')
  .subscribe((data)=>{
    this.search = data;
    console.log(this.search);
  })
}

transform(array, orderBy, asc = true){
  if (!orderBy || orderBy.trim() == ""){
    return array;
  }

  //ascending
  if (asc){
    return Array.from(array).sort((item1: any, item2: any) => {
      return this.orderByComparator(item1[orderBy], item2[orderBy]);
    });
  }
  else{
    //not asc
    return Array.from(array).sort((item1: any, item2: any) => {
      return this.orderByComparator(item2[orderBy], item1[orderBy]);
    });
  }
}

orderByComparator(a:any, b:any):number{

  if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
    //Isn't a number so lowercase the string to properly compare
    if(a.toLowerCase() < b.toLowerCase()) return -1;
    if(a.toLowerCase() > b.toLowerCase()) return 1;
  }
  else{
    //Parse strings as numbers to compare properly
    if(parseFloat(a) < parseFloat(b)) return -1;
    if(parseFloat(a) > parseFloat(b)) return 1;
   }

  return 0; //equal each other

}


}
