import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    url = `https://www.breakingbadapi.com/api/episodes`;

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get(`https://8100-priflores-breakingbadap-umowxlok2yt.ws-eu45.gitpod.io/assets/episodes.json`)
    }

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`)
    }

    getCharacters() {
        return this.http.get(`https://8100-priflores-breakingbadap-umowxlok2yt.ws-eu45.gitpod.io/assets/characters.json`)
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }

    getQuotes() {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }

    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/deaths`)
    }
    getDeath(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/death?name=Walter+White`)
    }


}