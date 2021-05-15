import React, { useState } from 'react'
import './App.css';
import HomePage from './components/HomePage';
import _ from 'lodash';
import {Row} from 'react-bootstrap'

function App() {
  const [searchUri, setSearchUri] = useState('https://www.google.com')
  const [searchDate, setSearchDate] = useState('20100101')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  function search(event: any) {
    event.preventDefault()
    setImageUrl('')
    setLoading(true)
    const date = new Date(searchDate)
    const parsedDate = date.getFullYear().toString() + date.getMonth().toString() + date.getDay().toString()
    fetch(`https://archive.org/wayback/available?url=${searchUri}&timestamp=${parsedDate}`)
      .then(res => res.json())
      .then(data => {
        setImageUrl(_.get(data, 'archived_snapshots.closest.url', 'https://www.google.com'))
      })
  }

  return (
    <>
      <HomePage loading={loading} search={search} onChange={setSearchUri} uri={searchUri} onChangeDate={setSearchDate} date={searchDate} />
      {imageUrl ? (
        <Row style={{height: '100vh'}}>
          <iframe id="frame" src={imageUrl} onLoad={() => setLoading(false)}></iframe>
        </Row>
      ) : ''}
    </>
  );
}

export default App;
