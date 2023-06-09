import axios from 'axios'
import {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_URL,
  instance,
} from '../config/baseURL'

export const getFeaturedProducts = async () => {
  const res = await instance.get('/api/products/featured')
  return res
}
export const getAllProducts = async () => {
  const res = await instance.get('/api/products')
  return res
}
export const getCategories = async () => {
  const res = await instance.get('/api/categories')
  return res
}
export const getProductsByCategory = async (params) => {
  const res = await instance.get(`/api/products/category/${params}`)
  return res
}
export const getSingleProduct = async (params) => {
  const res = await instance.get(`/api/products/${params}`)
  return res
}
export const deleteProduct = async (params, config) => {
  const res = await instance.delete(`/api/products/${params}`, config)
  return res
}
export const placeOrder = async (order, config) => {
  const res = await instance.post('/api/orders', order, config)
  return res
}
export const getAllOrders = async (config) => {
  const res = await instance.get('/api/orders', config)
  return res
}
export const getUserOrder = async (config) => {
  const res = await instance.get('/api/orders/user', config)
  return res
}
export const getOrderDetail = async (params, config) => {
  const res = await instance.get(`/api/orders/${params}`, config)
  return res
}

export const cashOrder = async (orderId, order, config) => {
  const res = await instance.put(
    `/api/orders/${orderId}/paycash`,
    order,
    config
  )
  return res
}
export const paypalOrder = async (orderId, order, config) => {
  const res = await instance.put(`/api/orders/${orderId}/paypal`, order, config)
  return res
}
export const paypalDelivery = async (orderId, order, config) => {
  const res = await instance.put(
    `/api/orders/${orderId}/paypaldelivery`,
    order,
    config
  )
  return res
}
export const trackOrders = async (params, order, config) => {
  const res = await instance.put(
    `/api/orders/${params}/tracking`,
    order,
    config
  )
  return res
}

export const uploadCloudinary = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  const data = await axios.post(CLOUDINARY_URL, formData)
  return data
}

export const createNewProduct = async (product, config) => {
  const newProduct = await instance.post('/api/products', product, config)
  return newProduct
}

export const getUserProfile = async (params, config) => {
  const res = await instance.get(`/api/auth/profile/${params}`, config)
  return res
}
export const updateUserProfile = async (profile, config) => {
  const res = await instance.put('/api/auth/profile/', profile, config)
  return res
}

export const getProductBySearch = async (searchParams) => {
  const res = await instance.get(`/api/catalog/search/?q=${searchParams}`)
  return res
}
