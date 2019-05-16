import axios from 'axios';

class Api {
  constructor() {
    // this.baseUrl = 'http://localhost/mavent.local/api';
    this.baseUrl = 'http://192.168.0.119/mavent.local/api';
  }

  getUrl(path) {
    return this.baseUrl + path;
  }

  Get(path, params = {}) {
    const url = this.getUrl(path);
    return axios.get(url,params);
  }

  Post(path, params = {}){
    const url = this.getUrl(path);
    return axios({
      baseURL: url,
      withCredentials: false,
      method : 'post',
      data : params,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
  }
}

export default new Api();