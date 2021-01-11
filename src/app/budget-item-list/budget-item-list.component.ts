import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {
  
  @Input()
  budgetItems!: BudgetItem[];
  @Output() delete:EventEmitter<BudgetItem> = new EventEmitter <BudgetItem>();
  constructor() { }

  ngOnInit(): void {
  }
 onDeleteButtonClicked(item:BudgetItem){
  this.delete.emit();
 }
}
