import axios from 'axios'
import {useAuth} from "../contexts/authContext.jsx";
import {toast} from "react-toastify";

const axiosArgs = {
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

const axiosInstance = axios.create(axiosArgs)
const axiosAuthInstance = axios.create(axiosArgs)

axiosAuthInstance.interceptors.request.use(function (config) {
  const auth = window.localStorage.getItem('AUTH')

  if ( auth ) config.headers.Authorization = `bearer ${JSON.parse(auth).jwt}`

  return config;
});

/**
 * Call API Login route
 * @param {object} credentials { identifier, password }
 * @return {object} { jwt, user }
 */
const loginApi = async (credentials) => {
  const response = await axiosInstance.post('/auth/local', credentials)
  return response?.data
}

/**
 * Call API Login route
 * @param {object} credentials
 * @return {object} { jwt, user }
 */
const registerApi = async (credentials) => {
  const response = await axiosInstance.post('/auth/local/register', credentials)
  return response?.data
}

/**
 * Call API update me route
 * @param {object} usersData
 * @param userId
 * @return {object} { username, mail }
 */
const updateMe = async (usersData, userId = null) => {
  const response = await axiosAuthInstance.put(`/users/${(userId) ? userId : usersData.id}?populate=user`, usersData)
  return response?.data
}

/**
 * Get me
 * @return {object} { user }
 */
const getMe = async ( ) => {
  const response = await axiosAuthInstance.get(`/users/me?populate[artisan][populate]=*`)
  return response?.data
}


/**
 * get artisans with user relation
 * @return {object} { data : [array of artisan] }
 */
const getArtisansWithUser = async ( ) => {
  const response = await axiosAuthInstance.get(`/artisans?populate=user`)

  return response?.data
}

/**
 * get products for one artisan
 * @return {object} { data : [array of products] }
 * @param idArtisan
 */
const getProductsForArtisan = async ( idArtisan ) => {
  const response = await axiosAuthInstance.get(`/products?filters[artisan][id][$eq]=${idArtisan}`)
  return response?.data
}

/**
 * get products for one artisan
 * @return Id product create
 * @param data
 */
const createProduct = async ( data ) => {
  const response = await axiosAuthInstance.post(`/products`, {
    data : data
  })
  return response?.data
}

/**
 * get products for one artisan
 * @return {object} product update
 * @param idProduct
 * @param data
 */
const updateProduct = async ( idProduct, data ) => {
  const response = await axiosAuthInstance.put(`/products/${idProduct}`, {
    data : data
  })
  return response?.data
}

/**
 * delete products for one artisan
 * @param idProduct
 */
const deleteProduct = async ( idProduct ) => {
  const response = await axiosAuthInstance.delete(`/products/${idProduct}`)
  return response?.data
}

export {
  loginApi,
  registerApi,
  updateMe,
  getArtisansWithUser,
  getMe,
  getProductsForArtisan,
  createProduct,
  updateProduct,
  deleteProduct
}
