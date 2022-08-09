import axios from 'axios'

const API_URL = '/api/bings/'

// Create new bing
const createBing = async (bingData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, bingData, config)

  return response.data
}

// Get all bings
const getBings = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const bingService = {
  createBing,
  getBings,
}

export default bingService
