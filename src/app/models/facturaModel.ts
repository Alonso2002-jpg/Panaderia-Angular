import {OrderModel} from "./orderModel";

export class FacturaModel {


  public idFactura: number = 0;
  public fecha?: Date = new Date();
  public orders: OrderModel[] = [];
  public importe: number = 0.0;

}
