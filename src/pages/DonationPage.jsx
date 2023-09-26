import { useLoaderData } from "react-router-dom";
import MyDonationList from "../components/myDonationList/MyDonationList";
import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../utils/localStorage";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";

const DonationPage = () => {
  const data = useLoaderData();

  const [myDonation, setMyDonation] = useState([]);

  const [dataLength, setDatalength] = useState(4);

  useEffect(() => {
    const allSavedId = getDataFromLocalStorage();

    const myDonationData =
      data?.length > 0
        ? data?.filter((donet) => allSavedId.includes(donet.id.toString()))
        : [];
    setMyDonation(myDonationData);
  }, [data]);
  // decide what content willbe show
  let content = null;
  if (myDonation.length > 0) {
    content = myDonation
      .slice(0, dataLength)
      .map((item) => <MyDonationList key={item.id} donet={item} />);
  } else {
    content = <p>You Have No Donation !</p>;
  }
  return (
    <section>
      <ContentWrapper>
        <>
          <div className="grid place-content-center md:grid-cols-2 gap-6">
            {content}
          </div>
          <div className="flex justify-center items-center">
          <button
              onClick={() => setDatalength(myDonation.length)}
              className={`w-[110px] h-12 text-[16px] mx-auto mt-10 font-semibold bg-[#009444] text-white rounded-lg ${
                myDonation.length <= dataLength ? "hidden" : "block"
              }`}
            >See All Now
            </button>
          </div>
        </>
      </ContentWrapper>
    </section>
  );
};

export default DonationPage;
