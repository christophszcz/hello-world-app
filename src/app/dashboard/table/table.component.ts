import { Component, OnChanges, Input } from '@angular/core';

export interface TableData {
  title: string;
  details: string;
  dueDate: string;
}

const DEFAULT_TABLE_DATA: TableData[] = [
  {title: 'Design Document', details: 'HydrogeI need to write a...', dueDate: 'Sepetmber 5'}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  displayedColumns: string[] = ['title', 'details', 'dueDate'];
  dataSource = DEFAULT_TABLE_DATA;

  @Input() input: string;
  @Input() area: string;

  ngOnChanges() {
    this.dataSource.push({ title: this.input, details: this.area, dueDate: undefined });
  }

}
