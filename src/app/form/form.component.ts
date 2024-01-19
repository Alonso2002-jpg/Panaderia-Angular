import { Component } from '@angular/core';
import {OrderModel} from "../models/orderModel";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  getRandomNumber = () => parseFloat((Math.random() *3).toFixed(2))

  selectedProduct = ""
  priceProduct = ""
  quantityOfProduct = ""

  orderToSend:OrderModel = new OrderModel()

  products = [
    {name: "Seleccionar...", price: ""},
    {name:"Ciabatta", price: this.getRandomNumber()},
    {name: "Baggette", price: this.getRandomNumber()},
    {name: "Integral", price: this.getRandomNumber()},
    {name: "Multicereales", price: this.getRandomNumber()},
    {name: "Centeno", price: this.getRandomNumber()}]

  setPrice() {
    const prodSelected = this.products.find((p) => p.name === this.selectedProduct)
    this.priceProduct = prodSelected?.price.toString() || ""
  }

  addOrder(){
    if (this.selectedProduct !== "Seleccionar..." && this.priceProduct !== "" && this.quantityOfProduct !== "") {
      this.orderToSend = {
        name: this.selectedProduct,
        price: parseFloat(this.priceProduct),
        quantity: parseFloat(this.quantityOfProduct),
        total: parseFloat(this.priceProduct) * parseFloat(this.quantityOfProduct)
      }
      this.selectedProduct = this.products[0].name
      this.priceProduct = ""
      this.quantityOfProduct = ""
    }else {
      alert("Por favor rellene todos los campos")
    }
  }
}
