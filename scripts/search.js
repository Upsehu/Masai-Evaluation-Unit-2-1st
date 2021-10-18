

let query = JSON.parse(localStorage.getItem('news-search'));
    console.log(query);

    let heading = document.getElementById('heading');    
    heading.innerText = `Search Results for ${query}:`;

let container = document.getElementById('container')
    search();

async function search(){
    console.log('search');
    
    console.log('hello');

    

    let res = await fetch(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=c1075319aec54adf9640d81abb4b8b39`)

    let data = await res.json();

    console.log(data);
    showNews(data.articles);
    // console.log(search);
}    


function showNews(data){

    // console.log(news);
    data.forEach( (news) => {
        let div = document.createElement('div');
        div.style.border = '1px solid black'
    
        let headline_box = document.createElement('div');
        headline_box.style.display = 'inline-block';
        headline_box.style.width = '30%';
    
        let description_box = document.createElement('div');
        description_box.style.display = 'inline-block';
    
        let img_box = document.createElement('div');
        img_box.style.display = 'inline-block';
    
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
    
        div.append(headline_box)
    
        // div.addEventListener('click', function(){
    
        //     window.location.html = 'news.html';
        // })
    
        show.append(div);
    });
    
}
