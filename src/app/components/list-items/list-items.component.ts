import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call/api-call.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent implements OnInit {
  private apiResult: any;
  protected data: any[] = [];
  protected currentPage: number = 1;
  protected pages: number[] = [];

  constructor(
    private readonly apiHttpService: ApiCallService,
    private readonly router: Router
  ) {}

  public getPageContent(pageNumber: number, updatePages: boolean = false) {
    this.currentPage = pageNumber;
    if (!this.data[this.currentPage]) {
      this.apiHttpService
        .getData(`${this.router.url}?page=${this.currentPage}`)
        .subscribe((result) => {
          this.apiResult = result;
          this.data[this.currentPage] = this.apiResult.results;
          if (updatePages)
            this.pages = Array.from(
              Array(Math.ceil(this.apiResult.count / 10)).keys()
            );
        });
    }
  }

  public navigateTo(objectData: any) {
    this.router.navigate(
      [this.router.url, objectData.url.split('/').reverse()[1]],
      { state: objectData }
    );
  }
  ngOnInit(): void {
    this.getPageContent(1, true);
  }
}
