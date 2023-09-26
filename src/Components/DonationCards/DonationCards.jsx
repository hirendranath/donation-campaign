import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const DonationCards = () => {
const [cardsDatas,setCardsDatas]=useState([]);

useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setCardsDatas(data))
},[])

    return (
        <div>
            <div>
                <div className="grid lg:grid-cols-4 px-24 grid-cols-1  gap-5 my-20 ">
                   
                           {
                             cardsDatas.map((data,idx)=><DonationCard key={idx} data={data}></DonationCard>)
                           } 
                    
                 
                </div>
            </div>
           
        </div>
    );
};

export default DonationCards;