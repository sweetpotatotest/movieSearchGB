import {movieList} from './movie.js';
drawMovie();

    //검색기
    function searchEg() {
      removeMovie();

      const search = document.getElementById("movieNameEg").value;
      console.log(search);

      movieList.results.forEach((element, movCount)=> {
        const template = `<div class="col-4">
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://image.tmdb.org/t/p/w440_and_h660_face/${element.poster_path}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title mb-5"><strong>${element.title}</strong></h5>
                    <p class="card-text">장르 : ${genreCheck(element.genre_ids[0])}</p>
                    <p class="card-text"><small class="text-body-secondary">${element.release_date}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
          if (element.title.includes(search.trim()) || element.title.toLowerCase().includes(search.trim()) || element.title.toUpperCase().includes(search.trim())) {
            document.getElementById("movies").insertAdjacentHTML("beforeend", template);
          }
        });
    }

    //장르 검색기
    function changeGenre() {
      const genre = document.getElementById("genreMovie").value;
      removeMovie();

      movieList.results.forEach((element, movCount)=> {
        const template = `<div class="col-4">
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://image.tmdb.org/t/p/w440_and_h660_face/${element.poster_path}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title mb-5"><strong>${element.title}</strong></h5>
                    <p class="card-text">장르 : ${genreCheck(element.genre_ids[0])}</p>
                    <p class="card-text"><small class="text-body-secondary">${element.release_date}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

          element.genre_ids.forEach(num => {
            if (num == genre) {
              document.getElementById("movies").insertAdjacentHTML("beforeend", template);
            }
          });
        });
    }

    // 연도 검색기
    function yearSearch() {
      const year = document.getElementById("movieRealse").value;
      removeMovie();

      movieList.results.forEach((element, movCount)=> {
        const template = `<div class="col-4">
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://image.tmdb.org/t/p/w440_and_h660_face/${element.poster_path}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title mb-5"><strong>${element.title}</strong></h5>
                    <p class="card-text">장르 : ${genreCheck(element.genre_ids[0])}</p>
                    <p class="card-text"><small class="text-body-secondary">${element.release_date}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

          if(element.release_date.slice(0, 4) == year) {
            document.getElementById("movies").insertAdjacentHTML("beforeend", template);
          }
        });
    }

    //인기순정렬 - 추가중
    function popular(event) {
      console.log(event.target.checked);
      removeMovie();

      let exElement = {popularity : 0};

      movieList.results.forEach((element, movCount)=> {
        const template = `<div class="col-4">
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://image.tmdb.org/t/p/w440_and_h660_face/${element.poster_path}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title mb-5"><strong>${element.title}</strong></h5>
                    <p class="card-text">장르 : ${genreCheck(element.genre_ids[0])}</p>
                    <p class="card-text"><small class="text-body-secondary">${element.release_date}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

          // if(event.target.checked) {
          //   if(parseFloat(element.popularity)  <= parseFloat(exElement.popularity)) {
          //     document.getElementById("movies").insertAdjacentHTML("beforeend", template);
          //   } else {
          //     document.getElementById("movies").insertAdjacentHTML("afterbegin", template);
          //   }
          // } else {
          //   removeMovie();
          //   drawMovie();
          // }
          // exElement = element;
        });
    }

    
    function genreCheck(num){
      switch (num) {
        case 10751: return "가족";
        case 35: return "코미디";
        case 12: return "어드벤쳐";
        case 14: return "판타지";
        case 27: return "호러, 공포";
        case 9648: return "미스테리";
        case 10752: return "전쟁";
        case 28: return "액션";
        case 80: return "범죄";
        case 53: return "스릴러";
        case 878: return "SF";
        case 18: return "드라마";
        case 37: return "서부영화";
        case 16: return "애니메이션";
        case 10749: return "로맨스";
        case 99: return "다큐멘터리";
        case 36: return "역사";
        case 10402: return "음악";
        default: return "검색";
      }
    };

    //버튼생성기
    function butMovie13_24(){
      const but = document.getElementById("nextButton");
      const newbut = document.createElement("button");
      newbut.textContent = '다음 12개';
      newbut.type = 'button';
      newbut.classList.add('btn', 'btn-primary');
      but.appendChild(newbut);
    };

    //영화 삭제기
    function removeMovie() {
      const removeMovie = document.getElementById("movies");
      while (removeMovie.firstChild) {
        removeMovie.removeChild(removeMovie.firstChild);
      };
    };


    

    //영화 리스트
    function drawMovie() {
      movieList.results.forEach((element, movCount)=> {
        const template = `
        <div class="col-4">
          <a href="./pageDetail.html?id=${element.id}" class="link-underline link-underline-opacity-0">
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://image.tmdb.org/t/p/w440_and_h660_face/${element.poster_path}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title mb-5"><strong>${element.title}</strong></h5>
                    <p class="card-text">장르 : ${genreCheck(element.genre_ids[0])}</p>
                    <p class="card-text"><small class="text-body-secondary">${element.release_date}</small></p>
                  </div>
                </div>
              </div>
            </div>
            </a>
          </div>
          `;
          
          document.getElementById("movies").insertAdjacentHTML("beforeend", template);
        });
      };
      
      // 더보기 버튼
      // if (movCount < 12) {
      //   document.getElementById("movies").insertAdjacentHTML("beforeend", template);
      //   console.log(movCount);
      // } else if (movCount >= 12 && movCount < 24 ) {
      //   document.querySelector('#nextMovie').addEventListener("click", function(){
      //     removeMovie(movCount);
      //   }, {once: true});
      //   document.getElementById("movies").insertAdjacentHTML("beforeend", template);
      // } else if (movCount >= 24 && movCount < 36) {

      // } else if (movCount >= 24 && movCount < 36) {};




    function a() {
      console.log(11);
    }

    window.a = a;
    window.removeMovie = removeMovie;
    window.searchEg = searchEg;
    window.changeGenre = changeGenre;
    window.yearSearch = yearSearch;
    window.popular = popular;