import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { NewsService } from './services/news.service';
import { News } from '../../../../core/models/news';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { NewsBoxComponent } from './components/news-box/news-box.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [TabMenuModule, LoaderComponent, NewsBoxComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  activeItem: MenuItem | undefined;
  isLoading: boolean = true;
  categories!: MenuItem[] | undefined;
  newsData!: News[];

  displayedItems: News[] = [];
  filterData: any = {
    currentPage: 0,
    itemsPerPage: 6,
  };
  private newsService = inject(NewsService);

  ngOnInit(): void {
    this.getBannersData();
    // this.getNews();
  }

  getBannersData() {
    this.newsService
      .getCategories()
      .pipe(
        switchMap((categoryRes) => {
          this.categories = categoryRes.newsCategory.map((c) => {
            return {
              label: c.name,
              id: c.id.toString(),
              command: () => {
                this.filterByCategory(c.id.toString());
              },
            };
          });

          this.activeItem = this.categories[0];
          return this.newsService.getNews('');
        })
      )
      .subscribe({
        next: (res) => {
          
          this.newsData = res.News.map(news => {
            const category = this.categories?.find(category => (category.id == news.categoryID));
            return {...news, categoryName: category?.label ? category.label : ''}
          });
          this.loadMore();
          this.isLoading = false;
        },
      });
  }

  getNews(search: any = '') {
    this.isLoading = true;
    this.filterData.currentPage = 0;
    this.filterData.itemsPerPage = 6;

    this.newsService.getNews({ search }).subscribe({
      next: (res) => {
        this.newsData = res.News.map(news => {
          const category = this.categories?.find(category => (category.id == news.categoryID));
          return {...news, categoryName: category?.label ? category.label : ''}
        });
        this.loadMore();
        this.isLoading = false;
      },
    });
  }

  filterByCategory(id: string){
    const startIndex =
      this.filterData.currentPage * this.filterData.itemsPerPage;
    const endIndex = startIndex + this.filterData.itemsPerPage;
    this.displayedItems = this.newsData.filter(news => (news.categoryID == id)).slice(0, endIndex);
  }

  loadMore() {
    const startIndex =
      this.filterData.currentPage * this.filterData.itemsPerPage;
    const endIndex = startIndex + this.filterData.itemsPerPage;
    this.displayedItems = this.newsData.slice(0, endIndex);
    this.filterData.currentPage++;
  }
}
