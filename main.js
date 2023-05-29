const firstName = document.getElementById('firstname').value;
const secondName = document.getElementById('secondname').value;
const phone = document.getElementById('numberphone').value;
const typeMassage = document.getElementById('type-massage').value;
const date = document.getElementById('date').value;

const token = "токен";
const chatId = 'chat_id’;
const spaces = '=======================';
let txt = '';

const data = {
  'Номер телефону: ': phone,
  'e-mail: ': email,
  'Повідомлення: ': message,
};

txt += 'Новий клієнт %0A%0A' + spaces + '%0A%0A';

for (const [key, value] of Object.entries(data)) {
  txt += '<b>' + key + '</b> ' + value + '%0A';
}

txt += '%0A' + spaces;

fetch(`https://api.telegram.org/bot${6046445208:AAF7SZ1pmkKYRgGHAGzbdfhHmfSC7bpes5g}/sendMessage?chat_id=${-1001910885603}&parse_mode=html&text=${txt}`)
  .then(response => {
    if (response.ok) {
      // Виконано успішний запит
      console.log('Повідомлення надіслано');
    } else {
      // Обробка помилки відповіді
      console.log('Помилка при відправленні повідомлення');
    }
  })
  .catch(error => {
    // Обробка помилки з'єднання
    console.log('Помилка з\'єднання:', error);
  });