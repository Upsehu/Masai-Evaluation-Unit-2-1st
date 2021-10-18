let count = 0;
let show = document.getElementById('show');

async function headLines(){

    count++;

    let countries = ['ae','ar','at','au','be','bg','br','ca','ch','cn','us']
    let country = Math.round(Math.random()* countries.length)
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=${countries[country]}&apiKey=c1075319aec54adf9640d81abb4b8b39`)

    let data = await res.json();

    if(count === 12){
        console.log('count',count);
        clearInterval(interval); 
    }
    console.log(data)
    randomNews(data.articles)
    let interval = setInterval(function(){
        headLines();
    }, 5000);
}



function randomNews(newsArr){

    let index =  Math.round(Math.random() * newsArr.length - 1);
    console.log(index);
    console.log(newsArr[index]);
    localStorage.setItem('news-data', JSON.stringify(newsArr[index]))
    showNews(newsArr[index]);

};

function showNews(news){

    console.log(news);

    let div = document.createElement('div');
    div.style.border = '1px solid black'
    div.style.margin = '20px';

    let headline_box = document.createElement('div');
    headline_box.style.display = 'inline-block';
    headline_box.style.width = '30%';

    let description_box = document.createElement('div');
    description_box.style.display = 'inline-block';

    let img_box = document.createElement('div');
    img_box.style.display = 'inline-block';
    img_box.style.width = '50%';
    img_box.style.height = '200px';

    let tit = document.createElement('h1');
    tit.innerText = news.title;
    tit.addEventListener('click',function(){
        window.location.href = 'news.html';
    })

    let auth = document.createElement('p');
    auth.innerText = news.author;

    let publishAt = document.createElement('p');
    publishAt.innerText = news.publishedAt;

    headline_box.append(tit, auth, publishAt);

    let descrip = document.createElement('p');
    descrip.innerText = news.desctiption;

    description_box.append(descrip);
    
    let img = document.createElement('img');
    img.src = news.urlToImage;
    img.style.height = '100%';

    img_box.append(img);


        div.append(headline_box,img_box)

    // div.addEventListener('click', function(){

    //     window.location.html = 'news.html';
    // })

    show.append(div);
}

// setInterval(randomNews, 1000)

headLines()

let search_btn = document.querySelector('button');
console.log(search_btn);

search_btn.addEventListener('click',() => {

    let query = document.getElementById('search').value;
    console.log(query);

    localStorage.setItem('news-search', JSON.stringify(query));
    window.location.href = 'search.html';
})

// setInterval(randomNews, 5000);

