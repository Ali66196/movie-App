console.log("hello world !!!!");

let getIdUrl = new URLSearchParams(location.search);
let idMovie = getIdUrl.get("id");

const movieContainer = document.querySelector('#Movie');  // انتخاب عنصر با آی‌دی Movie

window.addEventListener('load', () => {
    fetch('http://localhost:8080/movies', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            // فیلتر کردن فیلم با شناسه‌ای که از URL گرفته شده
            let dataById = data.filter((movie) => movie.id == idMovie);

            let movie = dataById[0];

            // تغییر عنوان صفحه به نام فیلم
            document.title = movie.title;

            // اضافه کردن HTML به عنصر با آی‌دی Movie
            movieContainer.insertAdjacentHTML('beforeend', `
                <div class="movie-poster">
                    <img src="${movie.cover_image_url}" alt="Movie Poster">
                </div>
                <div class="container">
                    <div class="movie-info">
                        <div class="movie-info-item">
                            <h6>Movie Name :</h6>
                            <p>${movie.title}</p>
                        </div>
                        <div class="movie-info-item">
                            <h6>IMDb Rate :</h6>
                            <p>${movie.rating}</p>
                        </div>
                        <div class="movie-info-item">
                            <h6>Genre:</h6>
                            <p>${movie.genre}</p>
                        </div>
                    </div>

                    <button onclick="goBack()">Go Back</button>
                </div>
            `);
        })
        .catch(error => {
            console.error('Error fetching movie:', error);
        });
});

// تابع برگشت به صفحه قبلی
function goBack() {
    window.history.back();
}
