const div = document.getElementById('img_div')
const url = 'https://jsonplaceholder.typicode.com/photos?_limit=30'
fetch(url)
  .then(res => res.json())
  .then(data => {
    data.map(value => {
      key = value.id;
      let img = document.createElement('img');
      img.src = `https://picsum.photos/200/300?random=${key}`;
      img_div.appendChild(img);
    })
  })