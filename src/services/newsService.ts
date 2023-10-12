import httpClient from '../utils/httpClient';

class NewsService {
  public async getNews() {
    const response = await httpClient.get(
      '/news/getNews?country=tr&tag=general'
    );
    return response.data;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new NewsService();
