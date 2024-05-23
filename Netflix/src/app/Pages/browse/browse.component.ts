// import { Component, OnInit, inject } from '@angular/core';
// import { AuthService } from '../../Shared/Services/auth.service';
// import { HeaderComponent } from '../../core/Components/header/header.component';
// import { BannerComponent } from '../../core/Components/banner/banner.component';
// import { MovieService } from '../../Shared/Services/movie.service';
// import { MovieCarouseComponent } from '../../Shared/components/movie-carouse/movie-carouse.component';
// import { IVideoContent } from '../../Shared/Models/Video-content.interface';
// import { forkJoin, map } from 'rxjs';

// @Component({
//   selector: 'app-browse',
//   standalone: true,
//   imports: [HeaderComponent,BannerComponent,MovieCarouseComponent],
//   templateUrl: './browse.component.html',
//   styleUrl: './browse.component.css'
// })
// export class BrowseComponent implements OnInit{
  
//   Auth=inject(AuthService)
//   Movieservice=inject(MovieService)
//   name=JSON.parse(sessionStorage.getItem('loggerInUser')!).name;
//   userprofileimg=JSON.parse(sessionStorage.getItem('loggerInUser')!).picture;
//   email=JSON.parse(sessionStorage.getItem('loggerInUser')!).email;

//    popularmovies2:IVideoContent[]=[];

//   // movies: IVideoContent[] = [];
//   // tvShows: IVideoContent[] = [];
//   // ratedMovies: IVideoContent[] = [];
//   // nowPlayingMovies: IVideoContent[] = [];
//   // // popularMovies: IVideoContent[] = [];
//   // topRatedMovies: IVideoContent[] = [];
//   // upcomingMovies: IVideoContent[] = [];


//   // sources = [
//   //   // this.Movieservice.getMovies(),
//   //   this.Movieservice.getTvShows(),
//   //   this.Movieservice.getRatedMovies(),
//   //   this.Movieservice.getNowPlayingMovies(),
//   //   this.Movieservice.getUpcomingMovies(),
//   //   this.Movieservice.getPopularMovies(),
//   //   this.Movieservice.getTopRated()
//   // ];

//   // ngOnInit(): void {
    
//   //  forkJoin(this.sources).pipe(
//   //   map(([movies1,tvshows1,ratedmovies1,nowplaying1,upcoming1,popular1,toprated1])=>{
//   //     return {movies1,tvshows1,ratedmovies1,nowplaying1,upcoming1,popular1,toprated1}
//   //   })
//   //  ).subscribe((res:any)=>{
//   //   this.movies=res.movies1.results as IVideoContent[];
//   //   this.tvShows=res.tvshows1.results as IVideoContent[];
//   //   this.ratedMovies=res.ratedmovies1.results as IVideoContent[];
//   //   this.nowPlayingMovies=res.nowplaying1.results as IVideoContent[];
//   //   this.upcomingMovies=res.upcoming1.results as IVideoContent[];
//   //   // this.popularMovies=res.popular1.results as IVideoContent[];
//   //   this.topRatedMovies=res.toprated1.results as IVideoContent[];
//   //  })
    
//   //  }

//    ngOnInit():void{
     
//     this.Movieservice.getMovies().subscribe(res=>{
//       console.log(res);
//       this.popularmovies2=res.results;
//     })
//    }
 
//   signout(){
//     sessionStorage.removeItem('loggerInUser');
//     this.Auth.signOut();
//   }
// }



import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../Shared/Services/auth.service';
import { HeaderComponent } from '../../core/Components/header/header.component';
import { BannerComponent } from '../../core/Components/banner/banner.component';
import { MovieService } from '../../Shared/Services/movie.service';
import { MovieCarouseComponent } from '../../Shared/components/movie-carouse/movie-carouse.component';
import { IVideoContent } from '../../Shared/Models/Video-content.interface';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, MovieCarouseComponent],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'] // Corrected from styleUrl to styleUrls
})
export class BrowseComponent implements OnInit {

  Auth = inject(AuthService);
  MovieService = inject(MovieService);
  name = JSON.parse(sessionStorage.getItem('loggerInUser')!).name;
  userprofileimg = JSON.parse(sessionStorage.getItem('loggerInUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('loggerInUser')!).email;

  popularmovies2: IVideoContent[] = [];
  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  ngOnInit(): void {
    this.initializePopularMovies();
    this.initializetvshows();
    this.initializerateddmovies();
    //this.initializeOtherData();
    this.initializenowplaying();
    this.initializeupcoming();
  }

  private initializePopularMovies(): void {
    this.MovieService.getMovies().subscribe(res => {
      console.log(res);
      this.popularmovies2 = res.results;
    });
  }

  private initializetvshows(): void {
    this.MovieService.getTvShows().subscribe(res => {
      console.log(res);
      this.tvShows= res.results;
    });
  }

  private initializerateddmovies(): void {
    this.MovieService.getTopRated().subscribe(res => {
      console.log(res);
      this.ratedMovies= res.results;
    });
  }

  private initializenowplaying(): void {
    this.MovieService.getNowPlayingMovies().subscribe(res => {
      console.log(res);
      this.nowPlayingMovies= res.results;
    });
  }

  private initializeupcoming(): void {
    this.MovieService.getUpcomingMovies().subscribe(res => {
      console.log(res);
      this.upcomingMovies= res.results;
    });
  }

  // private initializeOtherData(): void {
  //   const sources = [
  //     this.MovieService.getTvShows(),
  //     this.MovieService.getRatedMovies(),
  //     this.MovieService.getNowPlayingMovies(),
  //     this.MovieService.getUpcomingMovies(),
  //     this.MovieService.getPopularMovies(),
  //     this.MovieService.getTopRated()
  //   ];

  //   forkJoin(sources).pipe(
  //     map(([tvShows, ratedMovies, nowPlaying, upcoming, popular, topRated]) => ({
  //       tvShows: tvShows.results,
  //       ratedMovies: ratedMovies.results,
  //       nowPlaying: nowPlaying.results,
  //       upcoming: upcoming.results,
  //       popular: popular.results,
  //       topRated: topRated.results
  //     }))
  //   ).subscribe((res: any) => {
  //     this.tvShows = res.tvShows;
  //     this.ratedMovies = res.ratedMovies;
  //     this.nowPlayingMovies = res.nowPlaying;
  //     this.upcomingMovies = res.upcoming;
  //     this.movies = res.popular;
  //     this.topRatedMovies = res.topRated;
  //   });
  // }

  signout(): void {
    sessionStorage.removeItem('loggerInUser');
    this.Auth.signOut();
  }
}
