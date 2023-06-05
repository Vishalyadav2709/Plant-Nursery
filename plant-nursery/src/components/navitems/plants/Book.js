import { Button } from '@mui/material';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import Header from '../../header/header';

function Book() {
const [value, setValue] = useState();


return (
	<div className="App" >
        <Header />
	<center  >
		<br />
		<br />
        <div style={{marginTop:'90px', marginLeft:'600px'}}>
        <h1>Fill The Details To Book The Slot</h1> 
		<input
		type="text"
		onChange={(e) => setValue(e.target.value)}
		placeholder="Enter The Name"
        style={
            { marginTop:'30px', height:'30px' ,width:'300px', paddingLeft: '10px' ,display:'flex', justifyContent:'center'}
        }
		/>
		
        <br />
        
        <input
		type="date"
		
		placeholder="Enter The Date"
        style={
            { height:'30px' ,width:'300px', paddingLeft: '10px' ,display:'flex', justifyContent:'center'}
        }
		/>
		<br />
		
        <input
		type="time"
		
		placeholder="Enter The Time"
        style={
            { height:'30px' ,width:'300px', paddingLeft: '10px' ,display:'flex', justifyContent:'center'}
        }
		/>
		<br />
		<br />
	
       
		{value && (
                <QRCode
                title="Plant Wonders"
                value= {`${value}  booked successfully `}
                
            />
        )}
		
        <br />
		<br />
		<br />
         <Button  onClick={()=>{ alert('Slot Booked Successfully Please Save the QR Code '); }}>Book Slot</Button>
		<br />
		<br />
		<br />
        </div>
	</center>
    
	</div>
);
}

export default Book;
