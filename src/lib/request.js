import Vue from "vue";
import axios from "axios";
import config from "../config";
const http = axios.create({
  baseURL: config.apiUrl,
  timeout: 1000 * 5,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "X-Requested-With": "XMLHttpRequest"
  }
});
/**
 * 请求拦截
 */
http.interceptors.request.use(
  config => {
    // config.headers['token'] = Vue.cookie.get(''); // 请求头带上token---需要修改token名
    if (localStorage.token) {
      config.headers.Authorization = `token ${localStorage.token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default http;
