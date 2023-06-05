import React from "react"


import "../homepage/homepage.css"

import Footer from "../Footer/footer";
import Carousels, { CarouselsItem } from "../carousels/carousels";
import AdminHeader from "../header/adminheader";

import { useHistory } from "react-router-dom";

const AdminHomepage = ({setLoginUser1}) => {
  const history = useHistory()
    return (
        <div className="Homepage">
           
        <AdminHeader />
        
       
        <div className="Main">
        <Carousels >
        <CarouselsItem ><img src={'https://previews.123rf.com/images/timbrk/timbrk1603/timbrk160300416/54593941-the-word-vendor-is-lined-with-gold-letters-on-wooden-planks-3d-illustration-graphics.jpg' } alt={"Book"} width="100%" height="450px"/></CarouselsItem>
        <CarouselsItem><img src={'https://clubrunner.blob.core.windows.net/00000008602/Images/Kayako/2017-carousel/Partner-With-Us-Alt4.jpg'} alt={"Book"} width="100%" /></CarouselsItem>
        <CarouselsItem><img src={'https://clubrunner.blob.core.windows.net/00000008602/Images/Kayako/2017-carousel/Take-Action-Alt4.jpg'} alt={"Book"} width="100%" /></CarouselsItem>

      </Carousels>
       
      <div className="main-container">
      <div className="container">
        <div className="headline">
          <div className="Quotes"> <h1>Best Deals Of The Day</h1></div>
          <div className="button-view" onClick={() => history.push("/adminproducts")} style ={{cursor:'pointer'}}>Add Plants</div>
        </div>
        <div className="items">
          <div className="Card-1">
             <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/3-s2.0-B9780128139998000112-f11-01-9780128139998_large.jpg?v=1598874356" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/products")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://m-i7.fnp.com/images/pr/m/v20211029182947/snakeskin-sansevieria-plant-in-imported-plastic-pot.jpg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/products")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5WYtrjZNq7TI-kNkTAAF2GsU29tR6DN-WFQmn1JRiS3ilJqM6lOyioyzsg7UKVvZe0II&usqp=CAU" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/products")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/products")}>Best Product</h1>
             </div>
          </div>
          
          
        </div>
      </div>
      
     </div>

     {/* Second Line Items  */}
     <div className="main-container">
      <div className="container">
        <div className="headline">
          <div className="Quotes"> <h1>Medicinal Plants</h1></div>
          <div className="button-view" onClick={() => history.push("/adminproducts")} style ={{cursor:'pointer'}}>Add Plants</div>
        </div>
        <div className="items">
          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/products")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/products")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/products")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/products")}>Best Product</h1>
             </div>
          </div>
          
          
        </div>
      </div>
      
     </div>

     {/* Third Line Items  */}

     <div className="main-container">
      <div className="container">
        <div className="headline">
          <div className="Quotes"> <h1> Flowers</h1></div>
          <div className="button-view" onClick={() => history.push("/adminproducts")} style ={{cursor:'pointer'}}>Add Plants</div>
        </div>
        <div className="items">
          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/products")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/products")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/products")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/products")}>Best Product</h1>
             </div>
          </div>
          
          
        </div>
      </div>
      
     </div>
        
      
</div>
<Footer/>
        </div>
    )
}

export default AdminHomepage