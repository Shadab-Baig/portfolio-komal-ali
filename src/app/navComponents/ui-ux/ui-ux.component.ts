import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UIUXComponent implements OnInit {


  public loading = false;
  constructor(private router: Router , private service:CommonServiceService) { }

  public categories = [
    {
      name: 'Wire Frames',
      images: [
        { id: 35,thumbnailImage:'portfolio/wireframes/Absolute-Web-thumbnail.jpg', path: 'portfolio/wireframes/Absolute-Web-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/wireframes/Appetiser-Apps-thumbnail.jpg', path: 'portfolio/wireframes/Appetiser-App-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/wireframes/DataArt-thumbnail.jpg', path: 'portfolio/wireframes/Data-Art-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/wireframes/GojiLabs-thumbnail.jpg', path: 'portfolio/wireframes/GojiLabs-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/wireframes/momentum-thumbnail.jpg', path: 'portfolio/wireframes/Momentum-IO-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/wireframes/Netalico-thumbnail.jpg', path: 'portfolio/wireframes/Netalico-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/wireframes/Pinnacle-thumbnail.jpg', path: 'portfolio/wireframes/Pinnacle-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/wireframes/Pixelplex-thumbnail.jpg', path: 'portfolio/wireframes/Pixelplex-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/wireframes/SPACEDEV-thumbnail.jpg', path: 'portfolio/wireframes/spacedev-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/wireframes/thumbnail-stotex.jpg', path: 'portfolio/wireframes/Softatek-min.jpg' },
        // { id: 36,thumbnailImage:'portfolio/wireframes/thumbnail-fmd.jpg', path: 'portfolio/wireframes/source-file-11-min.jpg' },
        // { id: 36,thumbnailImage:'portfolio/wireframes/thumbnail-parkhill.jpg', path: 'portfolio/wireframes/source-file-12-min.jpg' },
        // { id: 36,thumbnailImage:'portfolio/wireframes/thumbnail-launchboom.jpg', path: 'portfolio/wireframes/source-file-14-min.jpg' },
        // { id: 36,thumbnailImage:'portfolio/wireframes/thumbnail-waymax.jpg', path: 'portfolio/wireframes/source-file-15-min.jpg' },
      ],
      categoryHeading: 'Wire Frames',
    },
    {
      name: 'Mockups',
      images: [
        { id: 35,thumbnailImage:'portfolio/mockups/momentum-thumbnail.jpg', path: 'portfolio/mockups/source-file-1-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/GojiLabs-thumbnail.jpg', path: 'portfolio/mockups/source-file-2-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/Pixelplex-thumbnail.jpg', path: 'portfolio/mockups/source-file-3-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/thumbnail-stotex.jpg', path: 'portfolio/mockups/source-file-4-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/Absolute-Web-thumbnail.jpg', path: 'portfolio/mockups/source-file-5-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/DataArt-thumbnail.jpg', path: 'portfolio/mockups/source-file-6-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/Pinnacle-thumbnail.jpg', path: 'portfolio/mockups/source-file-7-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/Appetiser-Apps-thumbnail.jpg', path: 'portfolio/mockups/source-file-8-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/SPACEDEV-thumbnail.jpg', path: 'portfolio/mockups/source-file-9-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/thumbnail-vofspace.jpg', path: 'portfolio/mockups/source-file-10-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/thumbnail-fmd.jpg', path: 'portfolio/mockups/source-file-11-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/thumbnail-parkhill.jpg', path: 'portfolio/mockups/source-file-12-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/thumbnail-launchboom.jpg', path: 'portfolio/mockups/source-file-14-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/thumbnail-waymax.jpg', path: 'portfolio/mockups/source-file-15-min.jpg' },
      ],
      categoryHeading: 'Mockups',
    }
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
