document.addEventListener('DOMContentLoaded', function() {
    fetch('/assets/data/games.json')
      .then(response => response.json())
      .then(data => {
          const gameContainer = document.getElementById('game-list');
          const searchInput = document.getElementById('search-input');

          function displayGames(filteredGames) {
              gameContainer.innerHTML = '';
              filteredGames.forEach(game => {
                  const gameItem = `
                      <div class="game-item">
                          <h2>${game.title}</h2>
                          <p>Designer: ${game.designer}</p>
                          <p>Genre: ${game.genre}</p>
                          <p>Players: ${game.players}</p>
                          <p>Playtime: ${game.playtime}</p>
                          <p>Price: ${game.price}</p>
                          <a href="${game.link}" target="_blank">More info</a>
                      </div>
                  `;
                  gameContainer.innerHTML += gameItem;
              });
          }

          // Display all games initially
          displayGames(data);

          // Add search functionality
          searchInput.addEventListener('input', function() {
              const searchTerm = searchInput.value.toLowerCase();
              const filteredGames = data.filter(game =>
                  game.title.toLowerCase().includes(searchTerm) ||
                  game.designer.toLowerCase().includes(searchTerm) ||
                  game.genre.toLowerCase().includes(searchTerm)
              );
              displayGames(filteredGames);
          });
      })
      .catch(error => console.error('Error loading games:', error));
});
