import React, { useEffect, useState } from 'react'
import './App.css';
import HomePage from './components/HomePage';
import { Button } from 'react-bootstrap';

function App() {
  const [searchUri, setSearchUri] = useState('www.facebook.com')
  const [searchDate, setSearchDate] = useState('20100101')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetch(`https://archive.org/wayback/available?url=${searchUri}&timestamp=${searchDate}`)
      .then(res => res.json())
      .then(data => {
        setImageUrl(data.archived_snapshots.closest.url || null)
      })

  }, [])
  const fetchImage = () => {
    console.log(imageUrl)
    if (imageUrl.length > 0) {
      setLoading(true)
      fetch('https://cors-anywhere.herokuapp.com/'+imageUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setLoading(false)
      })
        .catch(error => {
          setLoading(false)
          console.log(error)
      })
    }
  }
  return (
    <>
      <HomePage />
      {imageUrl ? (
        <>
        <Button disabled={loading} onClick={fetchImage}>{loading ? 'Loading...' : 'Fetch Image'}</Button>
        </>
      ) : ''}
    </>
  );
}

export default App;
