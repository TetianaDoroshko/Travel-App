import { HttpMethod } from '../variables/httpMethods';

class HttpService {
    headers = {};

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }

    addToken(token) {
        console.log('add token', token);
        this.headers.append('Authorization', `Bearer ${token}`);
    }

    removeToken() {
        this.headers.delete('Authorization');
    }

    async checkStatus(response) {
        if (!response.ok) {
            console.log('not ok');
            response = await response.json();
            throw new Error(response.message);
        }
        return response;
    }

    parseJSON(response) {
        return response.json();
    }

    async fetchData(path, method = HttpMethod.GET, body = null) {
        const url = `${this.baseUrl}${path}`;
        console.log(url);
        try {
            const response = await fetch(url, {
                method,
                headers: this.headers,
                body: JSON.stringify(body)
            });
            console.log('response', response);
            const responseChecked = await this.checkStatus(response);
            return await this.parseJSON(responseChecked);
        } catch (err) {
            console.log('error in catch', err);
            throw err;
        }
    }
}

export const httpService = new HttpService(process.env.REACT_APP_BASE_URL);