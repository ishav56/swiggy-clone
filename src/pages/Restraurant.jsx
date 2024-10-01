import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { IMG_URL_IMAGES } from '../constant';
import Shimmer from '../shimmer';


const Restraurant = () => {

    // we can destructure 
    const { resid } = useParams();
    const [showdetails, setshowdetails] = useState({});



    useEffect(() => {
        getinfodata();
    }, [])
    async function getinfodata() {

        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.5703203&lng=76.6472092&restaurantId=158827&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data)
        setshowdetails(json.data?.cards[2]?.card?.card?.info)
    };



    return showdetails.length===0?<Shimmer/>:(
        <>
            <div>

                <h1> restraunt={resid}</h1>
                <h1>{showdetails?.name}</h1>
                <img src={IMG_URL_IMAGES + showdetails?.cloudinaryImageId}></img>
                <h1>{showdetails?.avgRating}</h1>
                <h1>{showdetails?.cuisines}</h1>
                <h1>{showdetails?.city}</h1>

                <h1>{showdetails?.costForTwoMessage}</h1>
                <h1>{showdetails.name}</h1>
              
                                {/* <div>

                                    <ul>{
                                     (Object.values(showdetails.cards?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map((items)=><l1 key={items.id}>{items.name}</l1>))
                                    }</ul>
                                </div> */}
                        
                    
            

            </div>
        </>
    )
}
export default Restraurant