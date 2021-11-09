import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTerm: string;

  constructor() { }

  ngOnInit() {
  }

  async search(terms) {
    // this.products = await DataService.e_com_product.getAll({
    //   queryParams: {
    //     filter: {
    //       $or: [
    //         { title: { $regex: terms, $options: 'i' } },
    //         { sub_title: { $regex: terms, $options: 'i' } },
    //       ],
    //       is_available: true,
    //     },
    //     limit: 7,
    //   },
    // });
  }

}
