import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Homepage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id='homepage'>
        <div className='bg-light p-4 rounded d-flex flex-column justify-content-center align-items-center '>
          <h2 className='text-primary'>Add Task</h2>

          {/* button for add task */}
          <button className='btn btn-success mt-lg-4 mt-2 rounded ' onClick={handleShow}  >
            Add
          </button>

          {/* modal that appear when we click 'Add button' */}
          <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
              <Modal.Title className='text-primary'>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" className='form-control py-2 border border-primary border-3 rounded text-center text-primary ' placeholder='Task Title' style={{ fontWeight: "bold" }} />
              <textarea name="" id="" className='form-control py-2 border border-primary border-3 rounded text-center text-primary mt-2' placeholder='Description' style={{ fontWeight: "bold" }} ></textarea>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" className='rounded' onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" className='rounded' onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
      </div>

      {/* Section for added tasks */}
      <div id='addedtasksection'>
        

      </div>

    </>
  )
}

export default Homepage