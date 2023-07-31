import { HttpMethod } from '../variables/httpMethods';

class HttpService {
    headers = {};

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }

    addToken(token) {
        if (!this.headers.has('Authorization')) {
            this.headers.append('Authorization', `Bearer ${token}`);
        }
    }

    removeToken() {
        this.headers.delete('Authorization');
    }

    async checkStatus(response) {
        if (!response.ok) {
            response = await response.json();
            if (response.status === 401) {
                this.removeToken();
            }
            throw new Error(response.message);
        }
        return response;
    }

    parseJSON(response) {
        return response.json();
    }

    async fetchData(path, method = HttpMethod.GET, body = null) {
        const url = `${this.baseUrl}${path}`;

        const options = { method, headers: this.headers };
        if (body) options.body = JSON.stringify(body);

        try {
            const response = await fetch(url, options);
            const responseChecked = await this.checkStatus(response);
            return await this.parseJSON(responseChecked);
        } catch (err) {
            throw err;
        }
    }
}

export const httpService = new HttpService(process.env.REACT_APP_BASE_URL);
