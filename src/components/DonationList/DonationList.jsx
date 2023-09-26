import { useEffect } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { useState } from "react";
import Donation from "./Donation";

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  // deside what to render
  let content = null;
  if (donations.length > 0) {
    content = donations.map((donation) => (
      <Donation key={donation.id} donation={donation} />
    ));
  }
  return (
    <section className="py-32">
      <ContentWrapper>
        <div className="grid gap-6 md:ml-10 lg:ml-0 place-content-center md:grid-cols-2  lg:grid-cols-4 ">
          {content}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default DonationList;
