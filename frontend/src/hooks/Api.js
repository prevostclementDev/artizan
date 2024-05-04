import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (endpoint) => {
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
    headers: headers
  })

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const response = await axiosInstance.get(endpoint)
        console.log(response)
        setResponse(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setError(error)
        setIsLoading(false)
      }
    }
    getData()
  }, [endpoint])

  return { response, error, isLoading }
}

export {
  useFetch
}
