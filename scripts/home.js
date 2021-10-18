async function headLines(){

    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us/apiKey=98831fd7c8ff4083bd3c2a8db27cf41f`)

    let data = await res.json();

    console.log(data)
    // randomNews(data);
}


headLines()