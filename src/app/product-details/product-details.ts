import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.resolver';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  private readonly route = inject(ActivatedRoute);

  id = input<string>();
  category = input<string>('all');
  page = input<string>('1');

  product = input<Product | undefined>();

  constructor(private readonly router: Router) {
    // this.route.queryParamMap.subscribe(params => {
    //   this.category = params.get('category') ?? 'all';
    //   this.page = Number(params.get('page') ?? 1);
    // });
  }

  // changePage(): void {
  //   this.router.navigate([], {
  //     relativeTo: this.route,
  //     queryParams: {
  //       page: this.page + 1
  //     },
  //     queryParamsHandling: 'merge'
  //   });
  // }
}
