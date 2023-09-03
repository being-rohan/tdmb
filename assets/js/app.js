var cl = console.log;








cl(movieArray);


var result = '';

for (let i = 0; i < movieArray.length; i++) {
	cl(movieArray[i]);
	result += ` <div class="col-md-3 m-4">
              <div class="card">
                <figure class="moviecard">
                  <img src="https://image.tmdb.org/t/p/w1280/${movieArray[i].backdrop_path}" alt="tmdb">
                  <figcaption>
                    <div class="movietitle">
                      <div class="row">
                        <div class="col-md-10">
                          <h3 class="m-0">${movieArray[i].title}</h3>
                        </div>
                        <div class="col-md-2 rating text-center  ">
                          <span class=" p-1 bg-warning">${movieArray[i].vote_average} </span>
                        </div>
                      </div>
                    </div>
                    <div class="movieoverview">
                      <h4>
                        <i>overview</i>
                      </h4>
                      <p class="m-0">${movieArray[i].overview}</p>
                  </figcaption>
                </figure>
              </div>
            </div>

`


}
var result2 = document.getElementById("movie");

movie.innerHTML = result;