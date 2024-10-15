function showSlide(galleryId, index) {
    var gallery = document.getElementById(galleryId);
    var slides = gallery.querySelectorAll('.viewer img, .viewer iframe');
    var thumbnails = gallery.querySelectorAll('.thumbnails img');

    slides.forEach(function(slide) {
      slide.classList.remove('active');
    });
    thumbnails.forEach(function(thumbnail) {
      thumbnail.classList.remove('active');
    });

    slides[index].classList.add('active');
    thumbnails[index].classList.add('active');
  }

  function changeSlide(galleryId, direction) {
    var gallery = document.getElementById(galleryId);
    var slides = gallery.querySelectorAll('.viewer img, .viewer iframe');
    var thumbnails = gallery.querySelectorAll('.thumbnails img');
    var currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

    slides[currentIndex].classList.remove('active');
    thumbnails[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + slides.length) % slides.length;

    slides[currentIndex].classList.add('active');
    thumbnails[currentIndex].classList.add('active');
  }

  document.addEventListener('DOMContentLoaded', function() {
    var buyButtons = document.querySelectorAll('.buy');
    buyButtons.forEach(function(buyButton) {
        buyButton.addEventListener('click', function() {
            alert('Payment details:\n Account number: 121371150 \n Bank name: Zenith Bank \n Account name: ASACCOV Global Nigeria Limited \n Send proof of payment to 08067336449');
        });
    });
});
