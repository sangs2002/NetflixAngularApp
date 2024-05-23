// import { HttpClient } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';

// const options={
//   params:{
//     include_adult:'false',
//     include_video :'true',
//     language:'en-US',
//     page:'1',
//     sort_by:'popularity.desc'

//   },
//   headers:{
//     accept:'application/json',
//     Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmM3N2VmYWQwY2ExNmVhZjM4ZTVhZWEwYzljYmRmMSIsInN1YiI6IjY2NGFkZmJkYWJlNzU2M2IxNTkyYmQ5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3YRklWNhH-FdZO263Yrz3JPn8MU6ijY0AUfcjKHbP20'
//   }
// }



// @Injectable({
//   providedIn: 'root'
// })
// export class MovieService {

//   httpclient=inject(HttpClient)

//   getMovies(){
//     return this.httpclient.get<any>('https://api.themoviedb.org/3/discover/movie',options)
//   }

//   getTvShows() {
//     return this.httpclient.get('https://api.themoviedb.org/3/discover/tv', options)
//   }

//   getRatedMovies() {
//     return this.httpclient.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options)
//   }

//   getBannerImage(id: number) {
//     return this.httpclient.get(`https://api.themoviedb.org/3/movie/575264/images`, options)
//   }

//   getBannerVideo(id: number) {
//     return this.httpclient.get(`https://api.themoviedb.org/3/movie/575264/videos`, options);
//   }

//   getBannerDetail(id: number) {
//     return this.httpclient.get(`https://api.themoviedb.org/3/movie/575264`, options);
//   }

//   getNowPlayingMovies() {
//     return this.httpclient.get('https://api.themoviedb.org/3/movie/now_playing', options)
//   }

//   getPopularMovies() {
//     return this.httpclient.get('https://api.themoviedb.org/3/movie/popular', options)
//   }

//   getTopRated() {
//     return this.httpclient.get('https://api.themoviedb.org/3/movie/top_rated', options)
//   }

//   getUpcomingMovies() {
//     return this.httpclient.get('https://api.themoviedb.org/3/movie/upcoming', options)
//   }
 
// }


import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideoContent } from '../Models/Video-content.interface';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmM3N2VmYWQwY2ExNmVhZjM4ZTVhZWEwYzljYmRmMSIsInN1YiI6IjY2NGFkZmJkYWJlNzU2M2IxNTkyYmQ5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3YRklWNhH-FdZO263Yrz3JPn8MU6ijY0AUfcjKHbP20'
  }
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  httpclient = inject(HttpClient);

  getMovies(): Observable<{ results: IVideoContent[] }> {
    return this.httpclient.get<{ results: IVideoContent[] }>('https://api.themoviedb.org/3/discover/movie', options);
  }

  getTvShows(): Observable<{ results: IVideoContent[] }> {
    return this.httpclient.get<{ results: IVideoContent[] }>('https://api.themoviedb.org/3/discover/tv', options);
  }

  getRatedMovies(): Observable<{ results: IVideoContent[] }> {
    return this.httpclient.get<{ results: IVideoContent[] }>('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options);
  }

  getBannerImage(id: number): Observable<any> {
    return this.httpclient.get<any>(`https://api.themoviedb.org/3/movie/575264/images`, options);
  }

  getBannerVideo(id: number): Observable<any> {
    return this.httpclient.get<any>(`https://api.themoviedb.org/3/movie/575264/videos`, options);
  }

  getBannerDetail(id: number): Observable<any> {
    return this.httpclient.get<any>(`https://api.themoviedb.org/3/movie/575264`, options);
  }

  getNowPlayingMovies(): Observable<{ results: IVideoContent[] }> {
    return this.httpclient.get<{ results: IVideoContent[] }>('https://api.themoviedb.org/3/movie/now_playing', options);
  }

  getPopularMovies(): Observable<{ results: IVideoContent[] }> {
    return this.httpclient.get<{ results: IVideoContent[] }>('https://api.themoviedb.org/3/movie/popular', options);
  }

  getTopRated(): Observable<{ results: IVideoContent[] }> {
    return this.httpclient.get<{ results: IVideoContent[] }>('https://api.themoviedb.org/3/movie/top_rated', options);
  }

  getUpcomingMovies(): Observable<{ results: IVideoContent[] }> {
    return this.httpclient.get<{ results: IVideoContent[] }>('https://api.themoviedb.org/3/movie/upcoming', options);
  }
}
