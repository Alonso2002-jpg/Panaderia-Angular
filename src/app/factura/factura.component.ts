import {Component, Input} from '@angular/core';
import {FacturaModel} from "../models/facturaModel";

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  @Input() factura: FacturaModel = new FacturaModel();
}
