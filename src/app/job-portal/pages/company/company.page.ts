import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company, company, user } from 'src/app/job-portal/services/bucket';
import { CommonService } from 'src/app/services/common.service';
import { LocationApiService } from 'src/app/services/location-api.service';
import { ImageService } from 'src/app/social-media/services/image.service';
import { environment } from '../../services/environment';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {
  company: Company = {};
  countries: any;
  cities: any;
  companyForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _imageService: ImageService,
    private _locationService: LocationApiService,
    private _formBuilder: FormBuilder,
    private _commonService: CommonService,
    private _router: Router,
    private _userservice: UserService
  ) {}

  async ngOnInit() {
    this.initForm();
    let companyId = await this._route.snapshot.paramMap.get('id');
    if (companyId != 'add')
      this.company = await company.get(companyId, {
        queryParams: { relation: true },
      });
    else {
      this.initForm();
      this.getCountries();
    }
  }

  coverUpload(data) {
    let mimetype = data.split(';')[0].split(':')[1];
    let file_buf = this._imageService.toBuffer(data);
    let bufWithMeta = {
      contentType: mimetype,
      data: file_buf,
      name: 'image',
    };
    let imageId;
    if (
      this.company.cover_photo &&
      this.company.cover_photo.includes(environment.project_id)
    ) {
      let splitArr = this.company.cover_photo.split('/');
      imageId = splitArr[splitArr.length - 1].split('?')[0];
    }
    this._imageService.insert(bufWithMeta, imageId).then(async (res) => {
      this.company.cover_photo = res.url + `&timestamp=${new Date().getTime()}`;
      // await user.patch({
      //   _id: this.company._id,
      //   cover_photo: this.company.cover_photo,
      // });
    });
  }
  logoUpload(data) {
    let mimetype = data.split(';')[0].split(':')[1];
    let file_buf = this._imageService.toBuffer(data);
    let bufWithMeta = {
      contentType: mimetype,
      data: file_buf,
      name: 'image',
    };
    let imageId;
    if (
      this.company.logo &&
      this.company.logo.includes(environment.project_id)
    ) {
      let splitArr = this.company.logo.split('/');
      imageId = splitArr[splitArr.length - 1].split('?')[0];
    }
    this._imageService.insert(bufWithMeta, imageId).then(async (res) => {
      this.company.logo = res.url + `&timestamp=${new Date().getTime()}`;
      // await user.patch({
      //   _id: this.company._id,
      //   cover_photo: this.company.cover_photo,
      // });
    });
  }
  initForm() {
    this.companyForm = this._formBuilder.group({
      title: '',
      country: '',
      city: '',
      logo: '',
      cover_photo: '',
      description: '',
      web_site: '',
    });
  }
  async countryChange() {
    let citiesOfcountry = await this._locationService.getCityByCountry(
      this.companyForm.controls['country'].value
    );

    this.cities = citiesOfcountry['data']['states'];
    this.companyForm.controls['city'].setValue('');
  }
  async getCountries() {
    this.countries = await this._locationService.getCountries();
    this.countries = this.countries['data'];
  }
  async addCompany() {
    let companyData = this.companyForm.value;
    companyData['address'] = {
      country: companyData['country'],
      city: companyData['city'],
    };
    companyData['logo'] = this.company.logo;
    companyData['cover_photo'] = this.company.cover_photo;
    delete companyData['country'];
    delete companyData['city'];
    let newCompany = await company.insert(companyData);
    this._userservice.me.companies = [
      ...this._userservice.me.companies,
      newCompany._id,
    ];

    await user.patch({
      _id: this._userservice.me._id,
      companies: this._userservice.me.companies,
    });
    this._commonService.presentToast(
      companyData['title'] + ' company is successfully created',
      2000
    );
    this._router.navigateByUrl('/job-portal/profile/my-companies', {
      replaceUrl: true,
    });
  }
}
