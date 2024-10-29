import { Ui } from "./ui.js";

export class Details {
    constructor(id) {
        this.close();
        this.wantedDetails(id);
    }

    close() {
        let closeBtn = document.getElementById("btnClose");
        let gameSection = document.querySelector("section.games");
        let detailsSection = document.querySelector("section.details");
        closeBtn.addEventListener("click", function () {
            gameSection.classList.replace('d-none', 'd-block');
            detailsSection.classList.replace('d-block', 'd-none');
        });
    }

    async getDetails(id) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '4f2cc762a6msh669f00a5c1e5b3fp1c9762jsn8d558d8fad9c',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const data = await response.json();
        return data;
    }

    async wantedDetails(id = 582) {
        let loading = document.querySelector('.loading');
        loading.classList.remove('d-none');
        loading.classList.add('d-flex');
        let detailsData = await this.getDetails(id);
        loading.classList.remove('d-flex');
        loading.classList.add('d-none');
        let ui = new Ui();
        ui.displayDetailes(detailsData);
    }
}