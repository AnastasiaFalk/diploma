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

const form = document.getElementById('contact-form');
const buttonSubmit = document.getElementById('send');
buttonSubmit.addEventListener('click', () => {

  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;


  const token = "6046445208:AAF7SZ1pmkKYRgGHAGzbdfhHmfSC7bpes5g";
  const chatId = '-1001910885603';

  const spaces = '=======================';
  let txt = '';

  const dataSend = {
    'Номер телефону: ': phone,
    'Email: ': email,
    'Повідомлення: ': message,
  };

  txt += 'Новий клієнт %0A%0A' + spaces + '%0A%0A';

  for (const [key, value] of Object.entries(dataSend)) {
    txt += '<b>' + key + '</b> ' + value + '%0A';
  }

  txt += '%0A' + spaces;

  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${txt}`)
    .then(response => {
      if (response.ok) {
        // Виконано успішний запит
        console.log('Повідомлення надіслано');
        const result = document.createElement('div');
        result.classList = 'result';
        result.innerText = 'Повідомлення надіслано';
        form.appendChild(result);
      } else {
        // Обробка помилки відповіді
        console.log('Помилка при відправленні повідомлення');
      }
    })
    .catch(error => {
      // Обробка помилки з'єднання
      console.log('Помилка з\'єднання:', error);
    });
})