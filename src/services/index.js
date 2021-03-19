import axios from 'axios';
import CriptoJS from 'crypto-js';
import {publicKey, privateKey} from "../utils/config";

const ts = new Date().getTime()
const hash = CriptoJS.MD5(ts + privateKey + publicKey).toString()

const api = axios.create({baseURL: process.env.REACT_APP_API_URL});
const params = `?apikey=${publicKey}&hash=${hash}&ts=${ts}`

export const endpoints = {
  characters: `/characters${params}`,
}

export default api;