import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductsController {
  // Mock data for demonstration
  private products = [
    { id: '1', name: 'Product 1', description: 'Description for product 1', price: 100 },
    { id: '2', name: 'Product 2', description: 'Description for product 2', price: 150 },
  ];

  // Handler to get all products
  @MessagePattern({ cmd: 'get_all_products' })
  getAllProducts() {
    return this.products;
  }

  // Handler to get a product by ID
  @MessagePattern({ cmd: 'get_product_by_id' })
  getProductById(id: string) {
    return this.products.find(product => product.id === id);
  }
}
