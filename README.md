# React-Hub All Practices

This repository is an archive containing all the projects I have completed during my React learning journey.

## Project Structure

### Weeks

<details>
<summary>Click to expand all projects and pre-work.</summary>

| #   | Project Name | Source Code                                                                                      |
| --- |--------------|--------------------------------------------------------------------------------------------------|
| 0   | Pre Work     | [Source](https://github.com/sinantech/PatikaFrontEndCourse/blob/main/PreworkPractice/index.html) |
| 1   | Week-1       | [Source](https://github.com/sinantech/PatikaFrontendCourse/tree/main/Week_1)                     |
| 2   | Week-2       | [Source](https://github.com/sinantech/PatikaFrontendCourse/tree/main/Week_2)                     |
| 3   | Week-3       | [Source](https://github.com/sinantech/PatikaFrontendCourse/tree/main/Week_3)                     |
| 4   | Week-4       | [Source](https://github.com/sinantech/PatikaFrontendCourse/tree/main/Week_4)                     |
| 5   | Week-5       | [Source](https://github.com/sinantech/PatikaFrontendCourse/tree/main/Week_5)                     |
| 6   | Week-6       | [Source](https://github.com/sinantech/PatikaFrontendCourse/tree/main/Week_6)                     |
| 7   | Week-7       | [Source](https://github.com/sinantech/PatikaFrontendCourse/tree/main/Week_7_apple_website)       |

Week 7 main.js kodları açıklaması:

AOS (Animate On Scroll) Başlatılması:

AOS.init({ ... }): Sayfa yüklendiğinde animasyonları başlatmak için AOS kütüphanesi yapılandırılıyor. startEvent: 'load' ile animasyonlar sayfa yüklendiğinde başlayacak. offset: 20 ile animasyonların başlaması için elemanlar görünür alanın 20 piksel içine girdiğinde tetiklenecek. once: true ile animasyonlar sadece bir kez çalışacak.
Swiper Başlatılması (Kamera Bölümü):

new Swiper('#camera .swiper', { ... }): Kamera bölümünde bir Swiper kaydırıcısı başlatılıyor. speed: 600 ile geçiş hızı 600 milisaniye olarak ayarlanıyor. spaceBetween: 12 ile slaytlar arasındaki boşluk 12 piksel olarak ayarlanıyor. navigation objesi ile önceki ve sonraki butonları etkinleştiriliyor.
GLightbox Başlatılması (Genel):

GLightbox({ selector: '.glightbox' }): Genel lightbox (açılır görsel gösterici) başlatılıyor ve .glightbox seçicisine sahip elemanları hedef alıyor.
GLightbox Başlatılması (Fotoğraflar):

GLightbox({ selector: '#photos .photo' }): Fotoğraf lightbox başlatılıyor ve #photos .photo seçicisine sahip elemanları hedef alıyor.
Swiper Başlatılması (Yorumlar Bölümü):

new Swiper('#comments .swiper', { ... }): Yorumlar bölümünde bir Swiper kaydırıcısı başlatılıyor. pagination objesi ile sayfalandırma butonları etkinleştiriliyor ve tıklanabilir hale getiriliyor.
Header Elementinin Alınması:

var header = document.getElementById('header'): Header (üst bilgi) elementini header değişkenine atıyor.
Header'ın Kaydırıldığında Sınıf Eklenmesi/Kaldırılması:

var headerScrolledHandler = function () { ... }: Bu fonksiyon, sayfa 100 pikselden fazla kaydırıldığında header elementine header-scrolled sınıfını ekliyor, aksi takdirde bu sınıfı kaldırıyor.
HeaderScrolledHandler'ın Olaylara Eklenmesi:

window.addEventListener('load', headerScrolledHandler): Sayfa yüklendiğinde headerScrolledHandler fonksiyonu çağrılıyor.
document.addEventListener('scroll', headerScrolledHandler): Sayfa kaydırıldığında headerScrolledHandler fonksiyonu çağrılıyor.
Tüm 'scrollto' Sınıfına Sahip Bağlantıların Alınması:

var links = document.getElementsByClassName('scrollto'): Tüm .scrollto sınıfına sahip bağlantı elemanları links değişkenine atanıyor.
Her Bölüm İçin Doğru Linkin Odaklanması:

var focusSectionLink = function (event) { ... }: Bu fonksiyon, her scrollto bağlantısı için, kullanıcı sayfayı kaydırdığında doğru linkin odaklanmasını sağlıyor. Bağlantının hash değeri (örneğin #section1) ile ilgili bölüm bulunuyor ve sayfanın kaydırma pozisyonuna göre linkin active sınıfı ekleniyor veya kaldırılıyor.
Bağlantıya Tıklandığında İlgili Bölüme Yumuşak Geçiş:

var focusSection = function (event) { ... }: Bu fonksiyon, bağlantıya tıklandığında ilgili bölüme yumuşak bir geçiş yapılmasını sağlıyor. event.preventDefault() ile varsayılan tıklama davranışı durduruluyor ve sayfanın hedef bölüme kaydırılması sağlanıyor.
Sayfa Kaydırıldığında focusSectionLink'in Çağrılması:

window.addEventListener('scroll', focusSectionLink): Sayfa kaydırıldığında focusSectionLink fonksiyonu çağrılıyor.
'scrollto' Sınıfına Sahip Bağlantılara Tıklama Olayının Eklenmesi:

for (const link of links) { link.addEventListener('click', focusSection) }: Her scrollto sınıfına sahip bağlantıya tıklama olayı ekleniyor ve focusSection fonksiyonu çağrılıyor.
Bu kod, web sayfasının farklı bölümlerini kaydırma ve animasyonlarla daha kullanıcı dostu hale getirmeyi amaçlıyor. Swiper ve GLightbox gibi kütüphanelerle kaydırıcılar ve lightbox özellikleri ekleniyor, ve scroll animasyonları ile kullanıcı etkileşimi artırılıyor.


</details>



## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## Author

Sinan Can Ozer