export class Ui {
    constructor() { }

    displayGames(games) {
        let gamesBox = ``;
        for (let i = 0; i < games.length; i++) {
            gamesBox += `<div class="col">
                            <div class="item h-100" data-id="${games[i].id}">
                                <div class="item-body">
                                    <figure>
                                        <img src="${games[i].thumbnail}" class="w-100" alt="game-photo">
                                    </figure>
                                    <figcaption>
                                        <div class="name-and-badge">
                                            <h3 class="name">${games[i].title}</h3>
                                            <p class="badge">free</p>
                                        </div>
                                        <p class="description text-center opacity-50">${games[i].short_description.split(" ", 8).toString().replaceAll(",", " ")}</p>
                                    </figcaption>
                                        </div>
                                        <div class="item-footer">
                                            <p class="badge">${games[i].genre}</p>
                                            <p class="badge">${games[i].platform}</p>
                                        </div>
                                    </div>
                            </div>`
        }
        document.getElementById('gameData').innerHTML = gamesBox;
    }

    displayDetailes(details) {
        let detailsBox = `
                        <div class="image col-md-4">
                        <img src="${details.thumbnail}" alt="game-photo" class="w-100">
                        </div>
                        <div class="details col-md-8">
                            <div class="title d-flex gap-2">
                                <h3>Title:</h3>
                                <h3>${details.title}</h3>
                            </div>
                            <div class="information">
                                <div>
                                    <p class="text">Category:</p>
                                    <p class="badge text-bg-info text-uppercase">${details.genre}</p>
                                </div>
                                <div>
                                    <p class="text">Platform:</p>
                                    <p class="badge text-bg-info text-capitalize">${details.platform}</p>
                                </div>
                                <div>
                                    <p class="text">Status:</p>
                                    <p class="badge text-bg-info text-capitalize">${details.status}</p>
                                </div>
                            </div>
                            <p class="description">
                                ${details.description}
                            </p>
                            <a class="btn btn-outline-warning text-white mb-5" target="_blank" href="${details.game_url}">Show Game</a>
                        </div>`;
        document.getElementById("detailsContent").innerHTML = detailsBox;
    }
}