import PropType from "prop-types";
const ContentWrapper = ({ children }) => {
  return <div className="w-full max-w-7xl mx-auto">{children}</div>;
};

ContentWrapper.propTypes = {
  children: PropType.element,
};
export default ContentWrapper;
