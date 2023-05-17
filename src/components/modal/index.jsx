import css from "./index.module.css";
import PropTypes from "prop-types";
const Modal = ({ img, openModal }) => {
  return (
    <div className={css.backdrop} onClick={openModal}>
      <div className={css.modal}>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};
export { Modal };
Modal.propTypes = {
  img: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
