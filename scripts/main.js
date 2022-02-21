async function apiCall(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


function appendArticles(articles, main) {
    let parent_div = document.getElementById(main);
    articles.forEach(article => {
        let div = document.createElement("div");
        div.className = "article";
        div.addEventListener("click", () => {
            localStorage.setItem("article", JSON.stringify(article));
            window.location.href = "news.html";
        })
        let title = document.createElement("h2");
        title.innerText = article.title;
        div.append(title);
        parent_div.append(div);
    })
}

function appendArticle(article, main) {
    let div = document.createElement("div");
    div.id = "article";
    let title = document.createElement("h2");
    title.innerText = article.title;
    let img = document.createElement("img");
    img.src = article.urlToImage;
    let description = document.createElement("p");
    description.innerText = article.description;
    let content = document.createElement("p");
    content.innerText = article.content;
    let time = document.createElement("time");
    time.innerText = article.publishedAt;
    div.append(title, img, time, description, content);
    document.getElementById(main).append(div);
}

export { apiCall, appendArticles, appendArticle}