import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MyDonationList = ({ donet }) => {
  const {
    id,
    picture,
    title,
    category_bg,
    text_and_button_bg,
    category,
    card_bg,
    price,
  } = donet || {};
  return (
    <div
      className="w-[312px] h-auto lg:w-[630px] md:ml-10 lg:ml-0 lg:h-200px rounded-lg flex flex-col lg:flex-row lg:items-center"
      style={{ background: card_bg }}
    >
      <div className="w-full lg:w-[220px] h-[200px] relative ">
        <img
          src={picture}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg lg:rounded-t-none"
        />
      </div>
      <div className="ml-5 py-5 lg:py-0 ">
        <span
          className="inline-block px-4 py-1 rounded text-sm font-medium mb-2"
          style={{ background: category_bg, color: text_and_button_bg }}
        >
          {category}
        </span>
        <h1 className="text-2xl font-semibold text-[#0b0b0b] mb-2 w-max">
          {title}
        </h1>
        <h3
          className="text-[16px] font-semibold mb-2"
          style={{ color: text_and_button_bg }}
        >
          ${price}
        </h3>
        <button
          style={{ background: text_and_button_bg }}
          className="px-4 py-2 rounded text-white"
        >
          <Link to={`/donation/details/${id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};
MyDonationList.propTypes = {
  donet: PropTypes.object,
};
export default MyDonationList;
