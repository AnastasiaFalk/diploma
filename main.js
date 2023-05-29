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
