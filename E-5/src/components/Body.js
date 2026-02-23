import { useEffect, useState } from "react"
import { restList } from "../utils/demoData"
import RestoCart from "./RestoCart"

const Body=()=>{
   const [restoretList, setRestorentList]= useState(restList);
   useEffect(()=>{
    console.log("useEffect is called");
   },[]);

    return <>
            <div className="rs-c" >
        {/* <RestoCart/> */}
        <div className="filter">
          <button className="filter-rating-btn"
          onClick={(e)=>{
                const filterList = restList.filter((restorent)=>restorent.info.avgRating>4)
                setRestorentList(filterList);
              }}
          >top rated rastorent</button>
          <button className="filter-location-btn">
            location
          </button>
        </div>
      { restoretList.map((restorent)=>(
        <RestoCart key={restorent.info.id} restData={restorent}/>
      ))
        
      }
       

        </div>
    </>
}
export default Body;