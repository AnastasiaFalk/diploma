const data = {
  categories: {
      all: [
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg',
        'img/img4.jpg',
        'img/img5.jpg',
        'img/img6.jpg',
        'img/img7.jpg',
        'img/img8.jpg',
        'img/img9.jpg',
        'img/img10.jpg',
        'img/img11.jpg',
        'img/img12.jpg',
      ],
      landscapes: [
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg',
      ],
      children: [
        'img/img4.jpg',
        'img/img5.jpg',
        'img/img6.jpg',
      ],
      portraits: [
        'img/img7.jpg',
        'img/img8.jpg',
        'img/img9.jpg',
      ],
      family: [
        'img/img10.jpg',
        'img/img11.jpg',
        'img/img12.jpg',
      ]
  }
};

function insertImage (src, alt) {
  return `<img src="${src}" alt="${alt}" class="image">`
}

function showImages (images, imageContainer) { //функція виводу
  for (let i = 0; i < images.length; i++) { 
    const imageSrc = images[i];
    const imageAlt = `Image ${i+1}`;
    const imageElement = document.createElement('div');
    imageElement.innerHTML = insertImage(imageSrc, imageAlt); 
    imageContainer.appendChild(imageElement);
  }
  
}
const category = document.getElementById('category'); //присвоєння в змінну
  const imageContainer = document.getElementById("gallery");
  showImages(data.categories['all'], imageContainer);
  

category.addEventListener('change', () => {
  const selectedCategory = category.value;
  const images = data.categories[selectedCategory];
  imageContainer.innerHTML = '';
  showImages(images, imageContainer);
});

$('.contact-form').on('submit', function (event) {

  event.stopPropagation();
  event.preventDefault();

  let form = this,
      submit = $('.submit', form),
      data = new FormData(),
      files = $('input[type=file]')


  $('.submit', form).val('Отправка...');
  $('input, textarea', form).attr('disabled','');

  data.append( 'phone',   $('[name="phone"]', form).val() );
  data.append( 'email', 	$('[name="email"]', form).val() );
  data.append( 'message',	$('[name="message"]', form).val() );
 

  files.each(function (key, file) {
      let cont = file.files;
      if ( cont ) {
          $.each( cont, function( key, value ) {
              data.append( key, value );
          });
      }
  });
  
  $.ajax({
      url: 'ajax.php',
      type: 'POST',
      data: data,
      cache: false,
      dataType: 'json',
      processData: false,
      contentType: false,
      xhr: function() {
          let myXhr = $.ajaxSettings.xhr();

          if ( myXhr.upload ) {
              myXhr.upload.addEventListener( 'progress', function(e) {
                  if ( e.lengthComputable ) {
                      let percentage = ( e.loaded / e.total ) * 100;
                          percentage = percentage.toFixed(0);
                      $('.submit', form)
                          .html( percentage + '%' );
                  }
              }, false );
          }

          return myXhr;
      },
      error: function( jqXHR, textStatus ) {
          // Тут выводим ошибку
      },
      complete: function() {
          // Тут можем что-то делать ПОСЛЕ успешной отправки формы
          console.log('Complete')
          form.reset() 
      }
  });

  return false;
});
