import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {OrderModel} from "../models/orderModel";
import {FacturaModel} from "../models/facturaModel";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges{
  showFactura = false
  getRandomNumber = () => parseFloat((Math.random() *3).toFixed(2))
  totalOrders:OrderModel[] = []
  factura:FacturaModel = new FacturaModel();

  @Input() order:OrderModel = new OrderModel();

  ngOnChanges(changes: SimpleChanges): void {
    this.totalOrders.push(this.order)
    this.showFactura = false
  }

  deleteOrder(order: string){
    const index = this.totalOrders.indexOf(this.totalOrders.find((o) => o.name === order) || new OrderModel())
    this.totalOrders.splice(index, 1)
    this.showFactura = false
  }

  calculateImport() {
    let total = 0;
    this.totalOrders.forEach(o => total += o.total)

    return total
  }
  createFactura(){
    this.factura = {
      idFactura: this.getRandomNumber(),
      fecha: new Date(),
      orders: this.totalOrders,
      importe: this.calculateImport()
    }
    this.showFactura = true
  }
}
