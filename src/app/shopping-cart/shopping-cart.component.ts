import { Component, OnInit } from '@angular/core';
import { faList, faCartPlus, faShoppingCart, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import {
  ShoppingCartService,
  Product,
  ProductArray,
  GetAllProductsResponse,
} from '../shopping-cart.service';

class ShoppingCartState {
  busy: boolean = true;
  initialLoadBusy: boolean = true;
  replenishStockBusy: boolean = false;
  checkoutBusy: boolean = false;
  checkoutSuccess: boolean = false; 
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  faList = faList; 
  faCartPlus = faCartPlus; 
  faShoppingCart = faShoppingCart; 
  faCartArrowDown = faCartArrowDown;

  public productArray : ProductArray; 

  public shoppingCartState : ShoppingCartState; 

  constructor(private shoppingCartService: ShoppingCartService) {
    this.productArray = []; 
    this.shoppingCartState = new ShoppingCartState(); 
  }

  private stockProducts(productArray:ProductArray):void{
    this.productArray = productArray; 
    console.log(`this.productArray=${JSON.stringify(this.productArray)}`);
    this.productArray.forEach(product=>{
      product['Incart']=0;
    });
  }

  ngOnInit(): void {
    // get product list
    this.shoppingCartService.getProductList().subscribe(
      (response) => {
        this.stockProducts(response.data.ProductList);
        this.shoppingCartState.busy=false;
        this.shoppingCartState.initialLoadBusy = false; 
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public replenishStock():void { 
    console.log('replenish!'); 
    this.shoppingCartState.busy = true; 
    this.shoppingCartState.replenishStockBusy = true; 
    this.shoppingCartService.replenishStock().subscribe(
      response=>{
        console.log(`replenishStock response = ${JSON.stringify(response)}`);
        // ProductArray is response; 
        this.stockProducts(response );
        this.shoppingCartState.busy = false; 
        this.shoppingCartState.replenishStockBusy = false;
      },
      error=>{
        console.log(error); 
        // set error state 
      });

  }

  public checkout(): void{
    this.shoppingCartState.busy = true; 
    this.shoppingCartState.checkoutBusy = true;
    const filteredProductArray = this.productArray.filter(product=>product.Incart>0); 
    this.shoppingCartService.checkout(filteredProductArray).subscribe(
      response=>{
        this.stockProducts(response );
        // this.shoppingCartState.busy = false;
        this.shoppingCartState.checkoutSuccess = true;  
        this.shoppingCartState.checkoutBusy = false;
      },
      error=>{
        console.log(error); 
        // set error state
      }); 
  }

  public ok_checkoutSuccess() : void {
    this.shoppingCartState.checkoutSuccess = false;  
    this.shoppingCartState.busy = false;
  }

  public addToCart(myIndex:number):void{

    this.productArray[myIndex].Incart++; 
    console.log(`${this.productArray[myIndex].Incart}`);
  }


  private reducer_ItemsCount = (accumulator:number, currentValue:Product) => accumulator + currentValue.Incart;

  public Incart_totalItems():number{
    // return this.productArray.length; 
    return this.productArray.reduce(this.reducer_ItemsCount,0); 

  }

  private reducer_priceTally = (accumulator:number,product:Product) => accumulator + product.Incart*product.Price; 

  public Incart_totalCost():number{
    return this.productArray.reduce(this.reducer_priceTally,0); 
  }

  

  public remove(productName:string):void{
    this.productArray.forEach(product=>{
      if(product.ProductName == productName){
        product.Incart--; 
      }
    })
  }
}
