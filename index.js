
window.onload = (event) => {
    
    const news_contaner = document.getElementById("news");
    let new_news;  
    let allnews = "";
    
    $.ajax({
        url: "http://localhost/news_web/news.php",
        cache: false,
        success: function(data){
            data = JSON.parse(data);
            for (let i = 0; i < data.length; i++){
                new_news = `<div class="col">
                        <div class="card">
                        <img src="${data[i]["image"]}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${data[i]["title"]}</h5>
                            <p class="card-text">${data[i]["news"]}</p>
                        </div>
                        </div>
                    </div>`;
                allnews += new_news;
            }
            news_contaner.innerHTML += allnews;
        }
    });

};