import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Donation = ({ donation }) => {
  const {
    id,
    title,
    picture,
    category,
    category_bg,
    card_bg,
    text_and_button_bg,
  } = donation || {};

  return (
    <div
      className="w-[312px] h-[283px] rounded-lg cursor-pointer"
      style={{ backgroundColor: card_bg }}
    >
      <Link to={`/donation/details/${id}`}>
        <div className="w-[312px] h-[194px] relative">
          <img
            src={picture}
            alt={title}
            className="w-full h-[194px] object-cover rounded-t-lg"
          />
        </div>
        <div className="w-full h-[89px] p-4">
          <span
            className="inline-block px-4 py-1 rounded text-sm font-medium"
            style={{ background: category_bg, color: text_and_button_bg }}
          >
            {category}
          </span>
          <h1
            style={{ color: text_and_button_bg }}
            className="text-xl font-semibold mt-1"
          >
            {title}
          </h1>
        </div>
      </Link>
    </div>
  );
};
Donation.propTypes = {
  donation: PropTypes.object,
};
export default Donation;
