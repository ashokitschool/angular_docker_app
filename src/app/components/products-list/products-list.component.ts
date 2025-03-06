import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/dto/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId = 1;

  constructor(private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })

  }

  listProducts() {
    // check if "id" param is available

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has("id");

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get("id")!;
    } else {
      this.currentCategoryId = 1;
    }

    this.productService.getAllProducts(this.currentCategoryId).subscribe(res => {
      this.products = res.data;
    })
  }


}
