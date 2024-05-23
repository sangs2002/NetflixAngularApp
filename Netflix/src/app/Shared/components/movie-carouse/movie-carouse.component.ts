import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { IVideoContent } from '../../Models/Video-content.interface';
import { DescriptionPipe } from '../../Pipes/description.pipe';
import { ImagePipe } from '../../Pipes/image.pipe';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-movie-carouse',
  standalone: true,
  imports: [NgFor,DescriptionPipe,ImagePipe,NgIf],
  templateUrl: './movie-carouse.component.html',
  styleUrl: './movie-carouse.component.scss',
  animations:[
    trigger('fade',[
      transition('void=> *',[
        style({opacity:0}),
        animate(300,style({opacity:1}))
      ])
    ])
  ]
})
export class MovieCarouseComponent implements  AfterViewInit{

  @Input() videoContents:IVideoContent[]=[];

  @Input() title!:string;
  @ViewChild('swiperContainer') swiperContainer!:ElementRef;

  selectedcontent:string|null=null;

  ngAfterViewInit(): void {
    this.initSwiper();
   }

  private initSwiper(){
    return new Swiper(this.swiperContainer.nativeElement,{
slidesPerView:3,
slidesPerGroup:2,
centeredSlides:true,
loop:true,
breakpoints:{
  600:{
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:5,
    centeredSlides:true
  },
  900:{
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:5,
    centeredSlides:true
  },
  1200:{
    slidesPerView:4,
    slidesPerGroup:4,
    spaceBetween:5,
    centeredSlides:false
  },
  1500:{
    slidesPerView:5,
    slidesPerGroup:5,
    spaceBetween:5,
    centeredSlides:false
  },
  1800:{
    slidesPerView:5,
    slidesPerGroup:6,
    spaceBetween:5,
    centeredSlides:false
  },
}
    })
  }

  setHovermovie(movie:IVideoContent){
    this.selectedcontent=movie.title?? movie.name
  }
  clearhovermovie(){
    this.selectedcontent=null;
  }

}
