import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];
  items: MenuItem[];

  home: MenuItem;

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {label: 'Categories'},
      {label: 'Products', url: 'https://en.wikipedia.org/wiki/Lionel_Messi', icon: 'pi pi-external-link'}
    ];

    this.home = {icon: 'pi pi-home'};

    this.items = [
      {
        label: 'Categories', icon: 'fa fa-fw fa-check',
        items: [
            [
              {
                label: 'Category 1',
                items: [{label: 'SubCategory 1.1'}, {label: 'Category 1.2'}]
              },
              {
                label: 'Category 2',
                items: [{label: 'SubCategory 2.1'}, {label: 'SubCategory 2.2'}]
              }
            ],
            [
              {
                label: 'Category 3',
                items: [{label: 'SubCategory 3.1'}, {label: 'SubCategory 3.2'}]
              }
            ]
          ]
      },
      {
          label: 'Services', icon: 'fa fa-fw fa-soccer-ball-o',
          items: [
              [
                {
                  label: 'Service 1',
                  items: [{label: 'Service 1.1'}, {label: 'Service 1.2'}]
                  }
              ],
              [
                  {
                    label: 'Service 3',
                    items: [{label: 'Service 3.1'}]
                  }
              ],
              [
                  {
                    label: 'Service 5',
                  }
              ]
          ]
      }
    ];
  }

}
