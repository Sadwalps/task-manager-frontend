import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Homepage() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    handleCancel()
    setShow(false);
  }
  const handleShow = () => setShow(true);
  const [checked, setChecked] = useState(false);

  const [details, setDetails] = useState({
    title: "",
    description: ""
  })
  console.log(details);

  const handleCancel = () => {
    setDetails({
      title: "",
      description: ""
    })
  }

  const handleSubmit = () => {
    const { title, description } = details
    console.log(title, description);
    if (!title || !description) {
      alert('Fill the form completely')

    } else {
      alert('success')
      handleClose()
    }


  }

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
              <input type="text" className='form-control py-2 border border-primary border-3 rounded text-center text-primary ' placeholder='Task Title' value={details.title} onChange={(e) => setDetails({ ...details, title: e.target.value })} style={{ fontWeight: "bold" }} />
              <textarea name="" id="" className='form-control py-2 border border-primary border-3 rounded text-center text-primary mt-2' placeholder='Description' style={{ fontWeight: "bold" }} value={details.description} onChange={(e) => setDetails({ ...details, description: e.target.value })} ></textarea>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" className='rounded' onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="primary" className='rounded' onClick={handleSubmit}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
      </div>

      {/* Section for added tasks */}
      <div id='addedtasksection'>
        <div className='bg-light rounded m-lg-4 m-2 container-fluid'>
          <div className="row">

            {/* div for a single card */}
            <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center p-1">
              <Card style={{ width: '18rem', fontWeight: "bold" }} className='rounded text-center py-lg-3 py-2  my-lg-4 my-2  bg-primary text-light'>
                <Card.Body>
                  <Card.Title >Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  {/* div for the buttons */}
                  <div className='d-flex justify-content-between mt-lg-3 mt-2'>
                    <button className='btn btn-info rounded'>Edit</button>
                    <ToggleButton
                      className="mb-2"
                      id="toggle-check"
                      type="checkbox"
                      variant="outline-info"
                      checked={checked}
                      value="1"
                      onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                      Checked
                    </ToggleButton>
                    <button className='btn btn-danger rounded'>Delete</button>
                  </div>
                </Card.Body>
              </Card>
            </div>

          </div>


        </div>

      </div>

    </>
  )
}

export default Homepage