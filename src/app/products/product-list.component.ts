import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector : 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls : ['./product-list.component.css']
})

export class ProductListComponent{
    showImage : boolean = false;
    listFilter : string = "Laptop";
    __products: IProduct[] = [
		{
			"productId": 1,
            "productName": "Laptop",
            "productImg": "https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg",
			"productCode": "Computer Systems",
			"productPrice": 10000,
			"productRating": 5.0
        },
        {
			"productId": 2,
            "productName": "Charger",
            "productImg":"https://cdn.pixabay.com/photo/2013/07/13/12/21/charge-159707_1280.png",
			"productCode": "Computer Systems",
			"productPrice": 100,
			"productRating": 4.3
        },
        {
			"productId": 3,
            "productName": "iPhone",
            "productImg":"https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg",
			"productCode": "Computer Systems",
			"productPrice": 1000,
			"productRating": 3.5
        }
    ];
    toggleImage() : void {
        this.showImage = !this.showImage;
    }
}