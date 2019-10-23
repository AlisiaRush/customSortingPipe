import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface PeriodicElement2 {
  name2: string;
  position2: number;
  weight2: number;
  symbol2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


//NESTED TEBLE
const ELEMENT_DATA2: PeriodicElement2[] = [
  {position2: 111, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H'},
  {position2: 222, name2: 'Helium', weight2: 4.0026, symbol2: 'He'},
  {position2: 333, name2: 'Lithium', weight2: 6.941, symbol2: 'Li'},
  {position2: 444, name2: 'Beryllium', weight2: 9.0122, symbol2: 'Be'},
  {position2: 555, name2: 'Boron', weight2: 10.811, symbol2: 'B'},
  {position2: 666, name2: 'Carbon', weight2: 12.0107, symbol2: 'C'},
  {position2: 777, name2: 'Nitrogen', weight2: 14.0067, symbol2: 'N'},
  {position2: 888, name2: 'Oxygen', weight2: 15.9994, symbol2: 'O'},
  {position2: 999, name2: 'Fluorine', weight2: 18.9984, symbol2: 'F'},
  {position2: 100, name2: 'Neon', weight2: 20.1797, symbol2: 'Ne'},
];
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})



export class TablesComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  displayedColumns2: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);
  selection2 = new SelectionModel<PeriodicElement2>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
