import { Component, OnInit , } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  
  isOpen = false;
  activeRoute: string | undefined;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .pipe(filter((event:any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setActiveRoute(event.urlAfterRedirects);
      });
  }
  setActiveRoute(url: string) {
    if (url.includes('/portfolioDetails')) {
      this.activeRoute = '';
    } else {
      this.activeRoute = url.slice(1);
    }
  }
  
  
  
  isPortfolioActive(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.includes('portfolio') || currentUrl.includes('UI/UX') || currentUrl.includes('graphic-designing');
  }
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    }
  
}
