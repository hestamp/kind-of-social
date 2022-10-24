import { useState } from 'react'

export const useFetching = (callback) => {
  const [isLoad, setLoad] = useState(false)
  const [error, setError] = useState('')
  const fetching = async (...args) => {
    try {
      setLoad(true)
      await callback(...args)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoad(false)
    }
  }
  return [fetching, isLoad, error]
}
