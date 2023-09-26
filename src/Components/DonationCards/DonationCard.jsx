import { Link } from "react-router-dom";


const DonationCard = ({data}) => {
    const {bgColor,textColor,btnText,btnBg,categories,title,image,id}=data

    return (
        <div className="lg:w-[280px] mx-auto">
            <Link to={`/donation/${id}`}>
            
            <div >
                <div style={{backgroundColor:bgColor}} className=" w-72  rounded-lg h-72 shadow-md hover:shadow-xl">
                    <div className="lg:w-72   rounded-lg ">
                        <img className="h-48" src={image} alt="" />
                    </div>
                    <div className="p-5">
                        <h1 style={{backgroundColor:btnBg,color:btnText}} className="font-medium w-24 text-center rounded-lg py-[6px]">{categories}</h1>
                        <h2 style={{color:textColor}} className="text-xl font-semibold">{title}</h2>
                    </div>
                </div>
            </div>

            </Link>
            
        </div>
    );
};

export default DonationCard;