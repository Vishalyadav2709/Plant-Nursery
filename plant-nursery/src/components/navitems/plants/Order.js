import { Button } from '@mui/material';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import { useHistory } from 'react-router-dom';
import Header from '../../header/header';

function Order() {
const [value, setValue] = useState();
const history = useHistory()


return (
	<div className="App" >
        <Header />
	<center  >
		<br />
		<br />
        <div style={{marginTop:'90px', marginLeft:'600px'}}>
        <h1>Fill The Details To Place The Order</h1> 
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
		type="number"
		onChange={(e) => setValue(e.target.value)}
		placeholder="Phone Number"
        style={
            { marginTop:'30px', height:'30px' ,width:'300px', paddingLeft: '10px' ,display:'flex', justifyContent:'center'}
        }
		/>
		<br />
		
        <input
		type="text"
		onChange={(e) => setValue(e.target.value)}
		placeholder="Enter The Address"
        style={
            { marginTop:'30px', height:'30px' ,width:'300px', paddingLeft: '10px' ,display:'flex', justifyContent:'center'}
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
         <Button   onClick={() => history.push("/ordersuccess")} style ={{cursor:'pointer'}}>Place Order</Button>
		<br />
		<br />
		<br />
        </div>
	</center>
    
	</div>
);
}

export default Order;
