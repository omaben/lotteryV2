import axios, {Method} from 'axios'

axios.defaults.withCredentials = true;

export class HttpLib {
    public AppID = ''
    public AppKey = ''
    public Service = ''
    public TokenService = ''
    public noLoginFunc = null

    public constructor(AppID: string, AppKey: string, Service: string, TokenService: string) {
        this.AppID = AppID
        this.AppKey = AppKey
        this.Service = Service
        this.TokenService = TokenService
    }

    public async getToken() {
        if (localStorage.getItem('_token') && localStorage.getItem('_token') != '404') {
            return localStorage.getItem('_token');
        }
        await axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'get',
            withCredentials: true,
            url: this.TokenService,
        }).then((r: any) => {
            localStorage.setItem('_token', r.data.client)
        })
        return localStorage.getItem('_token');
    }

    public async GetContent(
        url: string,
        data: any = {},
        method: Method = 'post'
    ): Promise<any> {
        await this.getToken().then(function () {
            data._token = localStorage.getItem('_token');
        })
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key])
        }

        let Content: any = ''
        await axios({
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            method: method,
            withCredentials: true,
            url: this.Service + url,
            params: formData || [],
            data: formData || [],
        }).then((r: any) => {
            Content = r.data
        })
        return Content
    }
}
