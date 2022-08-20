import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call/api-call.service';
import { dataObjectTypes } from './item-types.data';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  protected itemData: any;
  protected itemError?: any;
  constructor(private router: Router, private apiHttpService: ApiCallService) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.itemData = dataObjectTypes[this.router.url.split('/')[1]](
        this.router.getCurrentNavigation()?.extras.state
      );
    } else {
      this.apiHttpService.getData(this.router.url).subscribe(
        (result: any) => {
          this.itemData =
            dataObjectTypes[this.router.url.split('/')[1]](result);
        },
        (error: HttpErrorResponse) => {
          this.itemError = error;
        }
      );
    }
  }

  ngOnInit(): void {}
}
