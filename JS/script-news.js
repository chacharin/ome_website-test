
// Function to fetch data from the provided URL and update the HTML content
function fetchDataAndRender() {
    var url = 'https://script.google.com/macros/s/AKfycbzh50Wgf2GoKzNOoT6XX98RNO80sOvO4HfF4UUnB2-PoVTo0GWPP9zKsO3dRA5EkG0KJg/exec';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Get the last 3 data entries
            var lastThreeData = data.data.slice(-3);

            // Get the card container
            var cardContainer = document.getElementById('card-container');
            
            // Loop through the last 3 data entries
            lastThreeData.forEach((entry, index) => {
                // Create a new card element
                var cardDiv = document.createElement('div');
                cardDiv.classList.add('col-md-4');
                cardDiv.innerHTML = `
                    <div class="card mb-3">
                        <img src="${entry.pic1}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${entry.topic}</h5>
                            <p class="card-text">${entry.intro}</p>
                        </div>
                    </div>
                `;
                cardContainer.appendChild(cardDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the function to fetch data and render the cards
fetchDataAndRender();

