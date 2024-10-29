import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Game {
    constructor() {
        document.querySelectorAll('.nav-item .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.startWeb(this.getActiveLink(link));
            });
        });
        this.ui = new Ui();
        this.startWeb();
    }

    getActiveLink(link) {
        let activeLink = document.querySelector('.nav-item .nav-link.active')
        activeLink.classList.remove('active');
        link.classList.add('active');
        let category = link.dataset.category;
        return category;

    }

    async getGames(category) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '4f2cc762a6msh669f00a5c1e5b3fp1c9762jsn8d558d8fad9c',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const data = await response.json();
        return data;
    }

    async startWeb(category = "mmorpg") {
        let loading = document.querySelector('.loading');
        loading.classList.remove('d-none');
        loading.classList.add('d-flex');
        let gameData = await this.getGames(category);
        loading.classList.remove('d-flex');
        loading.classList.add('d-none');
        this.ui.displayGames(gameData);

        let gameItems = document.querySelector('.games .games-container .items');
        let gameSection = document.querySelector("section.games");
        let detailsSection = document.querySelector("section.details");

        gameItems.addEventListener('click', function (e) {
            if (e.target.closest('.item')) {
                let id = e.target.closest('.item').dataset.id;
                gameSection.classList.replace('d-block', 'd-none');
                detailsSection.classList.replace('d-none', 'd-block');
                let details = new Details(id);
            }
        });
    }
}