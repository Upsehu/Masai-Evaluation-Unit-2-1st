async function headLines(){

    let res = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=98831fd7c8ff4083bd3c2a8db27cf41f`)

    let data = await res.json();

    console.log(data)
    setInterval(function(){
        randomNews(data.articles);
    }, 5000);
}

function randomNews(newsArr){

    let index =  Math.round(Math.random() * newsArr.length);
    console.log(index);
    console.log(newsArr[index]);
    showNews(newsArr[index]);

};

function showNews(news){

    let div = document.getElementById('div');

    let h1 = document.getAnimations('h1');

}

// setInterval(randomNews, 1000)

headLines()

// setInterval(randomNews, 5000);

