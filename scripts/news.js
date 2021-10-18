let news = JSON.parse(localStorage.getItem('news-data'))
console.log(news);

let container = document.getElementById('container');

let h1 = document.createElement('h1');
let img = document.createElement('img');

h1.innerText = news.title;
img.src = news.urlToImage;

container.append(h1,img);



