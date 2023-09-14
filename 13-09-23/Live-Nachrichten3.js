function getNews(category) {
    // Erstellen Sie eine AJAX-Anfrage an die Nachrichten-API
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=de&category=' + category + '&apiKey=e58b6c2536ab4ceaa0934fb46271f770', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Erfolgreiche Antwort erhalten
        var response = JSON.parse(xhr.responseText);
        var articles = response.articles;
  
        // Nachrichtencontainer leeren
        var newsContainer = document.getElementById('news');
        newsContainer.innerHTML = '';
  
        // Nachrichten anzeigen
        articles.forEach(function(article) {
          var title = article.title;
          var description = article.description;
          var url = article.url;
  
          var newsItem = document.createElement('div');
          newsItem.innerHTML = '<h2>' + title + '</h2>' +
                               '<a href="' + url + '">Lesen Sie weiter</a>';
  
          newsContainer.appendChild(newsItem);
        });
      } else {
        // Fehler bei der AJAX-Anfrage
        console.log('Fehler beim Abrufen der Nachrichten. Statuscode: ' + xhr.status);
      }
    };
    xhr.send();
  }
  
  // Funktion zum Aktualisieren der Nachrichten
  function updateNews() {
    var category = document.getElementById('category').value;
    getNews(category);
  }
  
  // Nachrichten beim Laden der Seite abrufen
  getNews('technology');
  
  // Nachrichten alle 30 Sekunden aktualisieren
  setInterval(updateNews, 30000);