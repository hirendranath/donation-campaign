

const Banner = () => {
    return (
        <div>
    
            <h1 className="text-center font-bold text-4xl mt-[212px]">I Grow By Helping People In Need</h1>
            <div className="flex justify-center my-12">
            <input type="text" placeholder="Search here...." className=" p-2 rounded-r-none input-error lg:w-full max-w-xs border" />
            <button className="btn btn-error  rounded-l-none">Search</button>

            </div>
 
        </div>
    );
};

export default Banner;