import { RESTO_IMAGE_URL } from "../utils/constants";


const RestoCart=(restData)=>{

//   console.log(restData)
// console.log(resObj.info.id)
const {name, id, locality, avgRating, cloudinaryImageId,sla:{deliveryTime}}= restData.restData.info
    return <>
       
       <div className="Rest-Container" >
         <div className="card">
         <img src={`${RESTO_IMAGE_URL}/${cloudinaryImageId}`}>
        </img>
        </div>
        <div>
            <h4>{name}</h4>
         <h4>deliveryTime: {deliveryTime}</h4>
         <h4>location: {locality}</h4>
         <h4>rating - {avgRating}</h4>
         </div>
       </div>
    </>
    
}
export default RestoCart;
