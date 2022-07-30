import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Example(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [enteredImage, setImage] = useState("");
  const [enteredName, setName] = useState("");
  const [enteredLink, setLink] = useState("");
  const [enteredTitle, setTitle] = useState("");

  const newImage = (event) => {
    setImage(event.target.value);
  };
  const newName = (event) => {
    setName(event.target.value);
  };
  const newLink = (event) => {
    setLink(event.target.value);
  };

  const newTitle = (event) => {
    setTitle(event.target.value);
  };
  const submit = (event) => {
    const newData = {
      imgscr: enteredImage,
      sname: enteredName,
      title: enteredTitle,
      link: enteredLink,
    };

    props.onNewSavedata(newData);

    setImage("");
    setTitle("");
    setName("");
    setLink("");
  };

  return (
    <>
      <Button className="Add_btn" variant="primary" onClick={handleShow}>
        <i class="fa-solid fa-plus fa-3x"></i>
      </Button>

      <Modal className="modal_container" show={show} onHide={handleClose}>
        <Modal.Header className="modal_title" closeButton>
          <Modal.Title>NEW SERIES</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image Source</Form.Label>
              <Form.Control
                type="link"
                value={enteredImage}
                autoFocus
                onChange={newImage}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={enteredTitle}
                autoFocus
                onChange={newTitle}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={enteredName}
                onChange={newName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="link"
                value={enteredLink}
                onChange={newLink}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal_foot">
          <Button
            className="modal_btn"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            className="modal_btn"
            variant="primary"
            onClick={() => {
              submit();
              handleClose();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
