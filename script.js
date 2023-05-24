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