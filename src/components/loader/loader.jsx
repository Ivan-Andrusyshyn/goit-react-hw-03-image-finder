import { RotatingLines } from "react-loader-spinner";
import PropTypes from "prop-types";

const Loader = ({ loading }) => {
  return (
    <RotatingLines
      strokeColor="orange"
      strokeWidth="5"
      animationDuration="1"
      width="96"
      visible={loading}
    />
  );
};
export { Loader };
Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
