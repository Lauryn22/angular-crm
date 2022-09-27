import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/core/models/order';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/core/enums/state-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$: Observable<Order[]>;
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    // this.collection$=this.httpClient.get<Order[]>(this.urlApi + '/orders');
    this.collection$=this.httpClient.get<Order[]>(`${this.urlApi}/orders`);

    // console.log(this.collection$);
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }
}
