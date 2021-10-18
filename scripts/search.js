async function search(){
    console.log('hello');
    window.location.href = 'search.html';

    let query = document.getElementById('search').value;
    console.log(query);

    let res = await fetch(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=98831fd7c8ff4083bd3c2a8db27cf41f`)

    let data = await res.json();

    showNews(data.article);
    // console.log(search);
}    


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
