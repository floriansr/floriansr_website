import axios from 'axios';

const API = axios.create({
  baseURL: 'https://floriansr-website.herokuapp.com/',
});

API.interceptors.request.use(
  ({ headers, ...config }) => ({
    ...config,
  }),
  (error) => {
    return Promise.reject(error);
  }
);

export default class APIManager {
  static async showProjects() {
    const res = await API.get('api/projects');
    return res.data;
  }

  static async showProject(projectSlug) {
    const res = await API.get(`api/projects/${projectSlug}`);
    return res.data;
  }
}
