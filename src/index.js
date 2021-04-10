
document.addEventListener('DOMContentLoaded', function () {
  fetchImages();
  fetchDogBreed();
});

function fetchImages() {
  const imgUrl = fetch ("https://dog.ceo/api/breeds/image/random/4")
  
    .then(resp=> resp.json())
    .then(response => {
      response.message.forEach(image => addImage(image))
    });
}

function addImage(dogPicUrl) {
  let container = document.querySelector('#dog-image-container');
  let newImage = document.createElement('img');
  newImage.src = dogPicUrl;
  container.appendChild(newImage);
}

function fetchDogBreed() {
  const breedUrl = fetch ('https://dog.ceo/api/breeds/list/all')

    .then(res => res.json())
    .then(results => {
      breeds = Object.keys(results.message);
      updateBreedList(breeds);
      addBreedSelectListener();
    });
}

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    
    li.addEventListener('click', updateColor);
  }

function updateBreedList(breeds) {
  let ul = document.querySelector('#dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function updateColor(event) {
    event.target.style.color = 'purple';
  }

function filterBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    filterBreedsStartingWith(event.target.value);
  });
}





