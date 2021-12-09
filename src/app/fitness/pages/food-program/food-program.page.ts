import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../services/environment';
import { food_program,Food_Program, initialize} from '../../services/bucket';
@Component({
  selector: 'app-food-program',
  templateUrl: './food-program.page.html',
  styleUrls: ['./food-program.page.scss'],
})
export class FoodProgramPage implements OnInit {
id:any;
foodProgram:Food_Program[];
  constructor(private _route: ActivatedRoute) {
    initialize({ identity:  localStorage.getItem('fitness_spica_token') });

   }
   async ionViewWillEnter(){
    this.foodProgram = await this.getFoodProgram();
  }

 async ngOnInit() {
    this.id = this._route.snapshot.params.id;
    this.foodProgram = await this.getFoodProgram();
  }

  async getFoodProgram () {
    return food_program.getAll({queryParams:{filter:{user:this.id},relation:true}});
  }
}
