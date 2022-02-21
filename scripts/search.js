function storeSearchterm() {
    let q = document.getElementById("searchbar");
    q.addEventListener("keypress", (e)=>{
        if(e.key === "Enter"){
            localStorage.setItem("search_term", q.value);
            window.location.href = "search.html";
        }
    });
}

export function appendArticles(articles, main) {
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
        let img = document.createElement("img");
        img.src = article.urlToImage;
        let description = document.createElement("p");
        description.innerText = article.description;
        div.append(img, title, description);
        parent_div.append(div);
    });
}

export default storeSearchterm;