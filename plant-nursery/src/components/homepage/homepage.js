import React from "react"


import "./homepage.css"
import Header from "../header/header";
import Footer from "../Footer/footer";
import Carousels, { CarouselsItem } from "../carousels/carousels";
import { useHistory } from "react-router-dom";

const Homepage = ({setLoginUser}) => {
  const history = useHistory()
    return (
        <div className="Homepage">
           
        <Header />
        
       
        <div className="Main">
        <Carousels >
        <CarouselsItem ><img src={'https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-app-home-page-banner-balcony-and-terrace-garden-metal-stand-v3_c1641745-019f-492b-bb98-34fc435c3f8f_670x400.jpg?v=1636743163' } width="100%" height= "520em" alt="img"/></CarouselsItem>
        <CarouselsItem><img src={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/plants-index-1558561755.png?crop=0.945xw:0.707xh;0,0.190xh&resize=640:*'} alt={"Book"} width="100%" height= "520em" /></CarouselsItem>
        <CarouselsItem><img src={'https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-app-home-page-banner-balcony-and-terrace-garden-metal-stand-v3_c1641745-019f-492b-bb98-34fc435c3f8f_670x400.jpg?v=1636743163'} alt={"Book"} width="100%" height= "520em" /></CarouselsItem>

      </Carousels>
       
     <div className="main-container">
      <div className="container">
        <div className="headline">
          <div className="Quotes"> <h1>Best Deals Of The Day</h1></div>
          <div className="button-view" onClick={() => history.push("/productss")} style ={{cursor:'pointer'}}>View all</div>
        </div>
        <div className="items">
          <div className="Card-1">
             <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/3-s2.0-B9780128139998000112-f11-01-9780128139998_large.jpg?v=1598874356" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/productss")}>Alovera</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://m-i7.fnp.com/images/pr/m/v20211029182947/snakeskin-sansevieria-plant-in-imported-plastic-pot.jpg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/productss")}>Cactus</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5WYtrjZNq7TI-kNkTAAF2GsU29tR6DN-WFQmn1JRiS3ilJqM6lOyioyzsg7UKVvZe0II&usqp=CAU" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/productss")}>Patharchhata</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/productss")}>Money Plant</h1>
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
          <div className="button-view" onClick={() => history.push("/productss")} style ={{cursor:'pointer'}}>View all</div>
        </div>
        <div className="items">
          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/productss")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/productss")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/productss")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/productss")}>Best Product</h1>
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
          <div className="button-view" onClick={() => history.push("/productss")} style ={{cursor:'pointer'}}>View all</div>
        </div>
        <div className="items">
          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/productss")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/productss")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/productss")}>Best Product</h1>
             </div>
          </div>

          <div className="Card-1">
             <img src="https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg" height='150em' alt="img"></img>
             <div className="card-details">
                <h1 onClick={() => history.push("/productss")}>Best Product</h1>
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

export default Homepage