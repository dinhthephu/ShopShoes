import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDeleteSupplier = (props) => {
  const { show } = props;

  return (
    <>
      <Modal show={show} onHide={props.onHide} className="modal-order">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thêm thương hiệu
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn thực sự muốn xóa thương hiệu này ?{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Hủy
          </Button>
          <Button variant="danger" onClick={props.comfirmDeleteSupplier}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteSupplier;
