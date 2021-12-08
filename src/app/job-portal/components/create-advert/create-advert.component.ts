import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { job_advert } from '../../services/bucket';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.scss'],
})
export class CreateAdvertComponent implements OnInit {
  advertForm: FormGroup;
  criterias;
  keysOfCriterias;
  selectedCriterias = {};
  @Input() company;
  constructor(
    private _modalController: ModalController,
    private _formBuilder: FormBuilder,
    private _commonService: CommonService,
    private _dataService: DataService
  ) {}

  ngOnInit() {
    this.initForm();
    this.getCriterias();
  }
  dismiss() {
    this._modalController.dismiss();
  }
  initForm() {
    this.advertForm = this._formBuilder.group({
      header: '',
      company: this.company,
      description: '',
      // criterias: '',
    });
  }
  async getCriterias() {
    let criteriasObj = this._dataService.getCriterias();
    this.criterias = criteriasObj;
    this.keysOfCriterias = Object.keys(criteriasObj);
  }
  selectCriteria(event, criteria) {
    if (event.detail.value && event.detail.value.length > 0)
      this.selectedCriterias[criteria] = event.detail.value;
    else delete this.selectedCriterias[criteria];
  }
  async addAdvert() {
    let formData = this.advertForm.value;
    formData['criterias'] = this.selectedCriterias;
    await job_advert.insert(formData);
    this._commonService.presentToast(
      'Advert has been successfully added',
      2000
    );
    this.dismiss();
    console.log(formData);
  }
}
