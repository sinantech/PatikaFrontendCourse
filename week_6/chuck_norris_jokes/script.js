// script.js
document.addEventListener('DOMContentLoaded', function() {
    const jokeElement = document.getElementById('joke');
    const newJokeButton = document.getElementById('new-joke');
    const photoElement = document.getElementById('chuck-norris-photo');
    const newPhotoButton = document.getElementById('new-photo');

    // Chuck Norris Şaka API'sinden şaka almak için fonksiyon
    function fetchJoke() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                jokeElement.textContent = data.value;
            })
            .catch(error => {
                jokeElement.textContent = 'Şaka yüklenirken bir hata oluştu.';
            });
    }

    // Chuck Norris fotoğrafları için örnek URL'ler
    const photos = [
        'https://hips.hearstapps.com/hmg-prod/images/gettyimages-150327735-copy.jpg',
        'https://images.bauerhosting.com/legacy/empire-legacy/uploaded/chuck-norris-uzis.jpg?auto=format&w=1440&q=80',
        'https://media.gq.com/photos/5583008609f0bee56440d085/master/pass/news-politics-blogs-death-race-chucknorris1450.jpg',
        'https://www.usatoday.com/gcdn/presto/2020/03/10/USAT/14860a5d-3ae8-4049-b4b5-5a02e14c4721-Chuck_Norris_01.JPG',
        'https://omgsogd.com/wp-content/uploads/2024/03/chuck-norris-04-696x928.jpg',
        'https://qph.cf2.quoracdn.net/main-qimg-948bd85485ccfcd690214422ea509190'
    ];

    // Fotoğraf URL'sini rastgele seç
    function changePhoto() {
        const randomIndex = Math.floor(Math.random() * photos.length);
        photoElement.src = photos[randomIndex];
    }

    // İlk şakayı ve fotoğrafı yükle
    fetchJoke();
    changePhoto();

    // "Başka Bir Şaka" düğmesine tıkladığında yeni şaka al
    newJokeButton.addEventListener('click', fetchJoke);

    // "Başka Bir Fotoğraf" düğmesine tıkladığında yeni fotoğraf al
    newPhotoButton.addEventListener('click', changePhoto);
});
