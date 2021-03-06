import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { actionsExecuting, ActionsExecuting } from '@ngxs-labs/actions-executing';

import { MenuItemState } from 'src/app/_states/menu-item.state';
import { GetItemDetails } from 'src/app/_actions/menu-item.action';
import { MenuItemModel } from 'src/app/_models/menu-item.model';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {
  @Input() item: MenuItemModel;
  @Select(MenuItemState.getSelectedItem) itemDetail: Observable<any>;
  @Select(actionsExecuting([GetItemDetails])) getDetailIsExecuting: Observable<ActionsExecuting>;

  defaultImage = 'https://via.placeholder.com/420x320';

  constructor() { }

  ngOnInit(): void {
  }
}
