
function addMovie() {
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const rating = parseFloat(document.getElementById('rating').value);
    const coverImageUrl = document.getElementById('cover_image_url').value; // دریافت لینک کاور

    if (!title || !genre || isNaN(rating) || !coverImageUrl) {
        alert('لطفاً تمامی فیلدها را پر کنید.');
        return;
    }

    fetch('http://localhost:8080/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, genre, rating, cover_image_url: coverImageUrl }) // ارسال لینک کاور
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('addResult').innerText = 'فیلم با موفقیت اضافه شد: ' + data;
        })
        .catch(error => {
            document.getElementById('addResult').innerText = 'خطا در افزودن فیلم: ' + error;
        });
}


// نمایش فیلم‌ها
function fetchMovies() {
    fetch('http://localhost:8080/movies', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);  // نمایش داده‌ها در کنسول برای بررسی
        const movieListContainer = document.getElementById('movieList');
        movieListContainer.innerHTML = '';  // پاک کردن محتویات قبلی

        if (data.length === 0) {
            movieListContainer.innerHTML = 'هیچ فیلمی در پایگاه داده موجود نیست.';
        } else {
            data.forEach(movie => {
                movieListContainer.insertAdjacentHTML('beforeend', `
                    <li class="movie-card-item">
                        <a href="http://127.0.0.1:5501/movie-details/movie.html?id=${movie.id}">
                            <img src="${movie.cover_image_url}" alt="${movie.title} cover">
                            
                        </a>
                    </li>



                `);
            });
        }
    })
    .catch(error => {
        document.getElementById('movieList').innerText = 'خطا در دریافت فیلم‌ها: ' + error;
    });
}





setTimeout(() => {

    document.addEventListener('load', fetchMovies())
}, 0);
