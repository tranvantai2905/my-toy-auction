import React, { useState } from "react";
import "./producdetail.css";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const ImageProductDetail = ({ mainImage, otherImages }) => {
  const [activeImg, setActiveImage] = useState(mainImage);
  const [showModal, setShowModal] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleImageClick = (image) => {
    setActiveImage(image);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="img-asset-container">
        <div className="ant-image css-f8go3t">
          <img
            src={activeImg}
            alt=""
            className="ant-image-img css-f8go3t"
            style={{ width: "400px", height: "400px" }}
            onClick={() => handleImageClick(activeImg)}
          />
        </div>
      </div>
      <div className="list-img-detail">
        {Object.keys(otherImages).map((key, index) => (
          <div className="img-detail active" key={index}>
            <img
              src={otherImages[key]}
              alt="image small"
              onClick={() => handleImageClick(otherImages[key])}
            />
          </div>
        ))}
      </div>
      {/* <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={activeImg} alt="" style={{ maxWidth: "100%" }} />
        </Modal.Body>
      </Modal>
       */}
      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
    </>
  );
};

export default ImageProductDetail;
