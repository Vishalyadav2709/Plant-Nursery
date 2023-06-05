import React from 'react'
import Header from '../../header/header'

const Track = () => {
  return (
    <div>
        <Header />
      <h1 style={{marginTop:'90px',alignItems:'center',display:'flex',justifyContent:'center',marginLeft:'300px'}}>Track The Vendors To Visit The Place</h1>
      <div class="map-area mb-100" style={{marginTop:'30px', display:'flex', justifyContent: 'center',alignItems:'center',flexWrap:'wrap',alignContent:'center',marginLeft:'300px'}}>
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=10CbFc3K7w-vlxS988FP1t8xhUFUSq1I&ehbc=2E312F" width="1040" height="580" title='map'></iframe>
                    </div>
    </div>
  )
}

export default Track
