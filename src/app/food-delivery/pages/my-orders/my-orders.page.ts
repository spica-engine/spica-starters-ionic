import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Order, order, User, food, rating, Rating } from '../../services/bucket';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  user: User;
  orders: any[] = [];
  selectedOrder: string;
  constructor(private _authService: AuthService) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise();
    this.orders = await this.getMyOrders();
    this.orders.forEach((el) => {
      let maxDate = new Date();
      maxDate.setDate(maxDate.getDate() - 2);
      if (new Date(el.created_at) > maxDate) {
        el['can_rate'] = true;
      }
    });
  }

  getMyOrders() {
    return order.getAll({ queryParams: { filter: { user: this.user._id }, relation: true } });
  }

  async ratingAction(event) {
    this.selectedOrder = undefined;
    if (event.data.value == 'apply') {
      let selectedOrder = this.orders.find((el) => {
        return el._id == this.selectedOrder;
      });
      let ratingData = {
        user: this.user._id,
        rating: event.data.rating,
        comment: event.data.comment,
      };

      let orderIndex = this.orders.findIndex(el => el._id == selectedOrder._id)
      this.orders[orderIndex]['rating'] = ratingData;
      
      let newRating = await rating.insert(ratingData);
      
      order.patch({_id: selectedOrder._id, rating: newRating._id})
      
      for (const el of selectedOrder.foods) {
        let tempFood = await food.get(el._id);
        tempFood.ratings = tempFood.ratings || [];
        tempFood.ratings.push(newRating._id);
        food.patch({ _id: tempFood._id, ratings: tempFood.ratings });
      }
    }
  }
}
