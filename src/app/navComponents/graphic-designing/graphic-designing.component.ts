import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-graphic-designing',
  templateUrl: './graphic-designing.component.html',
  styleUrls: ['./graphic-designing.component.scss']
})
export class GraphicDesigningComponent implements OnInit {

  public loading = false;
  constructor(private router: Router , private service:CommonServiceService) { }

  public categories = [
    {
      name: 'Branding designs',
      images: [
        {
          id: 1,
          path: 'portfolio/branding-designs/after-active-technology/After-active-logo-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/after-active-technology/After-Active-technology-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/after-active-technology/After-Active-technology-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/after-active-technology/After-active-stationary-technology-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/after-active-technology/After-active-stationary-technology-min.jpg' },
          ],
        },
        {
          id: 2,
          path: 'portfolio/branding-designs/Bulk-hospital/Bh-Hospital-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Bulk-hospital/BH-Hospital-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Bulk-hospital/BH-Hospital-2-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Bulk-hospital/BH-hospital-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Bulk-hospital/BH-hospital-light-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Bulk-hospital/BH-hospital-pen-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Bulk-hospital/card-min.jpg' },
          ],
        },
        {
          id: 3,
          path: 'portfolio/branding-designs/coders-Evoke/coders-evoke-stationory-design-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/coders-Evoke/coders-evoke-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/coders-Evoke/coders-evoke-2-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/coders-Evoke/coders-evoke-card-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/coders-Evoke/coders-evoke-chair-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/coders-Evoke/coders-evoke-box-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/coders-Evoke/coders-evoke-box-2-min.jpg' },
          ],
        },
        {
          id: 4,
          path: 'portfolio/branding-designs/dev-Technology/Dev-technology-branding-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/dev-Technology/dev-Technology 2-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/dev-Technology/dev-Technology-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/dev-Technology/dev-tchnology-shopoing-bag-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/dev-Technology/dev-tchnology-shopoing-bag-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/dev-Technology/dev-tchnology-cup-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/dev-Technology/dev-tchnology-cup-2-min.jpg' },
          ],
        },
        {
          id: 5,
          path: 'portfolio/branding-designs/Electrical-Soul/Electronic-soual-branding.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Electrical-Soul/electric-soul-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Electrical-Soul/Electric-soul-key-chain-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Electrical-Soul/Electric-soul-key-chain-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Electrical-Soul/Electric-soul-key-bag-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Electrical-Soul/Electric-soul-key bag-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Electrical-Soul/Electric-soul-cup-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Electrical-Soul/electric-soul-2-min.jpg' },
          ],
        },
        {
          id: 6,
          path: 'portfolio/branding-designs/flow-Vision/Flow-vision-branding-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/flow-Vision/flow-vision-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/flow-Vision/flow-vision-2-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/flow-Vision/Flow-vision-card-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/flow-Vision/Flow-vision-shirt-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/flow-Vision/Flow-vision-shirt-min.jpg' },
          ],
        },
        {
          id: 7,
          path: 'portfolio/branding-designs/Human-Health-Center/Human-health-hospital-branding-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Human-Health-Center/human-health-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Human-Health-Center/human-health-logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Human-Health-Center/Hospital-id-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Human-Health-Center/Hospital-id-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Human-Health-Center/Hospital-t-shirts-min.jpg' },
          ],
        },
        {
          id: 8,
          path: 'portfolio/branding-designs/life-hospital/Life-hospital-branding-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/life-hospital/life-hospital-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/life-hospital/life-hospital-2-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/life-hospital/life-hospital-min-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/life-hospital/life-hospital-cap-min.jpg' },
          ],
        },
        {
          id: 9,
          path: 'portfolio/branding-designs/orbous-softwear/Orbease-software-stationory-mockup-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/orbous-softwear/orbous-softwear-logo.jpg' },
            { detailPathImages: 'portfolio/branding-designs/orbous-softwear/orbous-softwear-logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/orbous-softwear/Orbus-software-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/orbous-softwear/Orbus software-min.jpg' },
          ],
        },
        {
          id: 10,
          path: 'portfolio/branding-designs/power-Electricity/power-electricity-branding-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/power-Electricity/power-electricity-logo-(1).jpg' },
            { detailPathImages: 'portfolio/branding-designs/power-Electricity/power-electricity-logo-(2).jpg' },
            { detailPathImages: 'portfolio/branding-designs/power-Electricity/Power-electricity-2-min.jpg' },
          ],
        },
        {
          id: 11,
          path: 'portfolio/branding-designs/time-Xperts/time-xpect-branding-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/time-Xperts/Time-expert-logo-2-logo-(1).jpg' },
            { detailPathImages: 'portfolio/branding-designs/time-Xperts/Time-expert-logo-2-logo-(2).jpg' },
            { detailPathImages: 'portfolio/branding-designs/time-Xperts/time-xperts-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/time-Xperts/time-xperts-2-min.jpg' },
          ],
        },
        {
          id: 12,
          path: 'portfolio/branding-designs/toyko-Software/tyco-softwaer-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/toyko-Software/tyco-software-house-2-logo-(1).jpg' },
            { detailPathImages: 'portfolio/branding-designs/toyko-Software/tyco-software-house-2-logo-(2).jpg' },
            { detailPathImages: 'portfolio/branding-designs/toyko-Software/tyco-software-house-min-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/toyko-Software/tyco-software-house-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/toyko-Software/tyco-software-house-3-min.jpg' },
          ],
        },
        {
          id: 12,
          path: 'portfolio/branding-designs/Vigor-electronics/Vigor-electronic-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Vigor-electronics/viger-electronics-logo-(1).jpg' },
            { detailPathImages: 'portfolio/branding-designs/Vigor-electronics/viger-electronics-logo-(2).jpg' },
            { detailPathImages: 'portfolio/branding-designs/Vigor-electronics/visiting-card-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/toyko-Software/viger-electronics-logo-(2).jpg' },
          ],
        },
        {
          id: 12,
          path: 'portfolio/branding-designs/viva-care-center/viva-care-center-min-1.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/viva-care-center/viva-care-center-logo-(1).jpg' },
            { detailPathImages: 'portfolio/branding-designs/viva-care-center/viva-care-center-logo-(2).jpg' },
            { detailPathImages: 'portfolio/branding-designs/Vigor-electronics/wtch-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/toyko-Software/Viva-care-center-2-min.jpg' },
          ],
        },
        {
          id: 12,
          path: 'portfolio/branding-designs/wailfair-clinic/Welfear-care-cennter-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/wailfair-clinic/welfare-clinic-logo-(1).jpg' },
            { detailPathImages: 'portfolio/branding-designs/wailfair-clinic/welfare-clinic-logo-(2).jpg' },
            { detailPathImages: 'portfolio/branding-designs/wailfair-clinic/Welfear-care-cennter-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/wailfair-clinic/welfare-clinic-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/wailfair-clinic/welfare-clinic-2-min.jpg' },
          ],
        },
      ],
      categoryHeading: 'Branding designs',
    },
    {
      name: 'Logos',
      images: [
        {
          id: 16,
          path: 'portfolio/branding-designs/after-active-technology/After-Active-technology-2-min.jpg',
        },
        { id: 17, path: 'portfolio/branding-designs/Bulk-hospital/BH-Hospital-logo.jpg' },
        { id: 18, path: 'portfolio/branding-designs/coders-Evoke/coders-evoke-logo.jpg' },
        { id: 19, path: 'portfolio/branding-designs/dev-Technology/dev-Technology 2-logo.jpg' },
        { id: 20, path: 'portfolio/branding-designs/Electrical-Soul/electric-soul-logo.jpg' },
        { id: 21, path: 'portfolio/branding-designs/flow-Vision/flow-vision-logo.jpg' },
        { id: 22, path: 'portfolio/branding-designs/Human-Health-Center/human-health-logo.jpg' },
        { id: 22, path: 'portfolio/branding-designs/life-hospital/life-hospital-logo.jpg' },
        { id: 22, path: 'portfolio/branding-designs/orbous-softwear/orbous-softwear-logo.jpg' },
        { id: 22, path: 'portfolio/branding-designs/power-Electricity/power-electricity-logo-(1).jpg' },
        { id: 22, path: 'portfolio/branding-designs/time-Xperts/Time-expert-logo-2-logo-(1).jpg' },
        { id: 22, path: 'portfolio/branding-designs/toyko-Software/tyco-software-house-2-logo-(1).jpg' },
        { id: 22, path: 'portfolio/branding-designs/Vigor-electronics/viger-electronics-logo-(1).jpg' },
      ],
      categoryHeading: 'Logos',
    },
    {
      name: 'Movie Posters',
      images: [
        {
          id: 16,
          path: 'portfolio/movie-posters/a-monsters-call-min.jpg',
        },
        { id: 17, path: 'portfolio/movie-posters/black-magic-2-min.jpg' },
        { id: 18, path: 'portfolio/movie-posters/brick-min.jpg' },
        { id: 19, path: 'portfolio/movie-posters/byhood-min.jpg' },
        { id: 20, path: 'portfolio/movie-posters/children-of-man-min.jpg' },
        { id: 21, path: 'portfolio/movie-posters/hot-dad-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/hunter-for-the-people-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/kubo-and-the-two-strings-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/littel-miss-sunshine-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/Moon-Rise-poster-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/mr-fox-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/october-black-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/shoots-up-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/sing-street-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/stand-by-me-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/the-baird-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/the-book-of-life-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/the-city-of-lost-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/the-fall-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/the-iron-gaint-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/the-ladge-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/the-life-scarry-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/The-Persepolis-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/the-preaks-of-brings-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/the-secrates-of-life-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/the-secrate-world-fraric-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/the-waves-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/the-way-way-back-min.jpg' },
        { id: 22, path: 'portfolio/movie-posters/valley-of-the-dead-min.jpg' },
      ],
      categoryHeading: 'Movie Posters',
    },
        {
      name: 'Mobile Splash Screens',
      images: [
        {
          id: 16,
          path: 'portfolio/mobile-splash-screens/1-min.jpg',
        },
        { id: 17, path: 'portfolio/mobile-splash-screens/2-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/3-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/4-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/5-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/6-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/7-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/8-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/9-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/10-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/11-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/12-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/15-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/16-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/17-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/18-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/19-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/21-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/22-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/23-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/24-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/25-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/26-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/29-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/31-min.jpg' },
        { id: 17, path: 'portfolio/mobile-splash-screens/32-min.jpg' },
      ],
      categoryHeading: 'Mobile Splash Screens',
    },
  ];

  currentCategory: any = this.categories[0];
  name: string = `${this.categories[0].name}`;
  select(selectVal: string) {
    for (let i = 0; i < this.categories.length; i++) {
      let token = this.categories[i].name.includes(selectVal)
      if (token === true) {
        this.showCategory(this.categories[i])
      }
    }
  }
  ngOnInit(): void {
    const savedCategory = this.categories.find(category => category.categoryHeading === this.service.currentCategoryHeading);
    if(savedCategory){
      this.showCategory(savedCategory);
    }
  }

  showCategory(category: any) {
    this.loading = true;
    this.currentCategory = category;
    this.service.currentCategoryHeading = category.categoryHeading
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  gotoDetails(image: any, i:any) {
    const id = image.id;
    const detailImages = image.detailImages;
    const bgImage = image.path;
    const selected = {
      ...image,
      category: this.currentCategory.images,
      selectedCategory:this.currentCategory,
      index: i 
    };
    this.router.navigate(['portfolioDetails', id], {
      state: {
        images: detailImages,
        bgImage,
        selected
      },
    });
  }
  
  public  goback(): void {
    this.router.navigate(['portfolio']);
  }

}
