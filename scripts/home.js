async function headLines(){

    let countries = ['ae','ar','at','au','be','bg','br','ca','ch','cn','us']
    let country = Math.round(Math.random()* countries.length)
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=${countries[country]}&apiKey=98831fd7c8ff4083bd3c2a8db27cf41f`)

    let data = await res.json();

    console.log(data)
    randomNews(data.articles)
    setInterval(function(){
        headLines();
    }, 5000);
}



function randomNews(newsArr){

    let index =  Math.round(Math.random() * newsArr.length - 1);
    console.log(index);
    console.log(newsArr[index]);
    showNews(newsArr[index]);

};

function showNews({author, content, description, publishedAt, title, url, urlToImage}){

    let div = document.createElement('div');

    let headline_box = document.createElement('div');
    headline_box.style.display = 'inline-block';
    headline_box.style.width = '30%';

    let description_box = document.createElement('div');
    description_box.style.display = 'inline-block';

    let img_box = document.createElement('div');
    img_box.style.display = 'inline-block';

    let tit = document.createElement('h1');
    tit.innerText = title;

    let auth = document.createElement('p');
    auth.innerText = author;

    let publishAt = document.createElement('p');
    publishAt.innerText = publishedAt;

    headline_box.append(tit, auth, publishAt);

    
    container.append(headline_box);
}

// setInterval(randomNews, 1000)

headLines()

// setInterval(randomNews, 5000);

