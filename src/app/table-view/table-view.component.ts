import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

const DETAILED_DATA = [
  {id: 1, "Title":"Angular Expert", "Author":"Packt", "Price":"1400"},
  {id: 2, "Title":"Angular Patterns", "Author":"Wrox", "Price":"3253"},
  {id: 3, "Title":"Angular NGBook", "Author":"ngbook", "Price":"4039"},
  {id: 4, "Title":"Angular Learning", "Author":"O'Reilly", "Price":"859"}
]

const DETAILED_SCHEMA : any = {
  "Ttitle": "text",
  "Author": "text",
  "Price": "number",
  "isEdit": "isEdit"
}

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  displayedFields : string[] = ['Title', 'Author', 'Price', 'isEdit'];
  dataSource = DETAILED_DATA;
  dataSchema = DETAILED_SCHEMA;

  addRowItem(titleOut: string, authorOut: string, priceOut: string){
    const addingRow = {id: Math.floor(Math.random() * 1000),"Title": titleOut, "Author": authorOut, "Price":priceOut, "isEdit":"false"};
    this.dataSource = [...this.dataSource, addingRow];
  }

  deleteRow(itemId : any){
    this.dataSource = this.dataSource.filter(x => x.id != itemId);
  }

  viewRedirect(itemId : any){
    let dataCol : string[] | any = this.dataSource.filter(x => x.id == itemId);
    let navigationExtrasData : NavigationExtras = {
      queryParams: {
          "id": dataCol[0].id,
          "Title": dataCol[0].Title,
          "Author": dataCol[0].Author,
          "Price": dataCol[0].Price
      }
    };
    
    this.router.navigate(['/view'], navigationExtrasData);
  }
}
