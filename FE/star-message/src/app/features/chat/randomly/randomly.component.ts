import { Component, OnInit } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-randomly',
  templateUrl: './randomly.component.html',
  styleUrls: ['./randomly.component.css']
})
export class RandomlyComponent implements OnInit {
  products: any[] = [];
  name: string = '';
  price: number = 0;

  constructor(
    private randomService: RandomService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.randomService.getProduct().subscribe((data) => {
      this.products = data;
    });
  }

  create() {
    const newProduct = {
      name: this.name,
      price: this.price
    }

    this.randomService.create(newProduct).subscribe(() => {
      console.log('ok');
    });
  }
}
