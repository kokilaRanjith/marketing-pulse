document.addEventListener("DOMContentLoaded", () => {
    const stockData = {
      "tesla": {
        "yesterday": "700.00",
        "day_before": "690.00",
      },
      "apple": {
        "yesterday": "150.00",
        "day_before": "145.00",
      },
      "amazon": {
        "yesterday": "3200.00",
        "day_before": "3100.00",
      },
      "microsoft": {
        "yesterday": "290.00",
        "day_before": "280.00",
      },
      "google": {
        "yesterday": "2800.00",
        "day_before": "2750.00",
      },
      "meta": {
        "yesterday": "380.00",
        "day_before": "370.00",
      },
      "nvidia": {
        "yesterday": "550.00",
        "day_before": "530.00",
      },
    };
  
    const newsData = [
      { title: "Tesla Hits Record", description: "Record sales this quarter!", image: "./assets/images/tesla.jpg" },
      { title: "Apple New Product Launch", description: "Apple unveils new Macbook Pro.", image: "./assets/images/apple.jpg" },
      { title: "Amazon Expands Globally", description: "Amazon invests heavily in international growth.", image: "./assets/images/amazon.jpg" },
      { title: "Microsoft's AI Progress", description: "Microsoft releases new AI-powered tools.", image: "./assets/images/microsoft.jpg" },
      { title: "Google's New Search Algorithm", description: "Google introduces a major update to search algorithms.", image: "./assets/images/google.jpg" },
      { title: "Meta in the Metaverse", description: "Meta invests further into virtual reality and metaverse.", image: "./assets/images/meta.jpg" },
      { title: "Nvidia GPU Innovations", description: "Nvidia pushes the boundaries of AI and gaming graphics.", image: "./assets/images/nvidia.jpg" },
    ];
  
    const searchBtn = document.getElementById("searchBtn");
    const searchBar = document.getElementById("searchBar");
    const stockInfo = document.getElementById("stockInfo");
    const newsContainer = document.getElementById("newsContainer");
    const carousel = document.getElementById("carousel");
  
    searchBtn.addEventListener("click", () => {
      const query = searchBar.value.toLowerCase();
  
      if (query) {
        // Display stock data
        displayStockInfo(query);
  
        // Display news related to the searched company
        displaySearchResults(query);
  
        // Update carousel with different content
        updateCarousel(query);
      } else {
        alert("Please enter a company name to search.");
      }
    });
  
    // Display Stock Information
    function displayStockInfo(company) {
      if (stockData[company]) {
        const { yesterday, day_before } = stockData[company];
        const change = (yesterday - day_before).toFixed(2);
        const percentageChange = ((change / day_before) * 100).toFixed(2);
        
        stockInfo.innerHTML = `
          <h2>${company.charAt(0).toUpperCase() + company.slice(1)} Stock Info:</h2>
          <p>Yesterday: $${yesterday}</p>
          <p>Day Before: $${day_before}</p>
          <p>Change: $${change} (${percentageChange}%)</p>
        `;
      } else {
        stockInfo.innerHTML = "<p>No stock data found for this company.</p>";
      }
    }
  
    // Display search results (news related to the searched company)
    function displaySearchResults(query) {
      newsContainer.innerHTML = "";
      const filteredNews = newsData.filter(news =>
        news.title.toLowerCase().includes(query)
      );
  
      if (filteredNews.length > 0) {
        filteredNews.forEach(news => {
          const card = `
            <div class="news-card">
              <img src="${news.image}" alt="${news.title}">
              <p><strong>${news.title}</strong></p>
              <p>${news.description}</p>
            </div>
          `;
          newsContainer.innerHTML += card;
        });
      } else {
        newsContainer.innerHTML = "<p>No news found for this company.</p>";
      }
    }
  
    // Update carousel with different content than the searched company
    function updateCarousel(query) {
      carousel.innerHTML = "";
      const filteredNews = newsData.filter(news =>
        !news.title.toLowerCase().includes(query)
      );
  
      if (filteredNews.length > 0) {
        filteredNews.forEach(news => {
          const item = `
            <div class="carousel-item">
              <img src="${news.image}" alt="${news.title}">
              <p><strong>${news.title}</strong></p>
              <p>${news.description}</p>
            </div>
          `;
          carousel.innerHTML += item;
        });
      } else {
        carousel.innerHTML = "<p>No other news available for the carousel.</p>";
      }
    }
  });
  