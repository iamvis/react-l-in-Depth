import { restList } from "../utils/demoData"
import RestoCart from "./RestoCart"

const Body=()=>{
    return <>
            <div className="rs-c" >
        {/* <RestoCart/> */}
      { restList.map((restorent)=>(
        <RestoCart key={restorent.info.id} restData={restorent}/>
      ))
        
      }
       

        </div>
    </>
}
export default Body;