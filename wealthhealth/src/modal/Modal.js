import { useDispatch, useSelector } from "react-redux";
import { setModalBoolean } from "../app/slices";
import "./modal.css";

function Modal() {
  const isModalOn = useSelector((state) => state.employee.isModalOn);
  const dispatch = useDispatch();

  const showHideClassName = isModalOn
    ? "modal display-flex"
    : "modal display-none";

  const showHideContainerClassName = isModalOn
    ? "display-block"
    : "display-none";

  const closeModal = () => {
    dispatch(setModalBoolean(false));
  };

  return (
    <div className={showHideContainerClassName}>
      <div className={showHideClassName}>
        <p className="modal_text">Employee Created !</p>
        <p className="button_close_container">
          <i
            type="button"
            onClick={closeModal}
            className="close_modal fa fa-2x fa-times-circle-o"
            aria-hidden="true"
          ></i>
        </p>
      </div>
    </div>
  );
}

export default Modal;
