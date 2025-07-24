import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { addtaskAPI, gettaskAPI, removetaskAPI } from './services/allApi';

function Homepage() {
  const [show, setShow] = useState(false);

  const [showtask, setShowtask] = useState([])

  const [removetask, setRemovetask] = useState({})

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

  //add task logics
  const handleSubmit = async () => {
    const { title, description } = details
    console.log(title, description);
    if (!title || !description) {
      alert('Fill the form completely')

    } else {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("description", description)

      const result = await addtaskAPI(reqBody)
      console.log(result);

      if (result.status == 200) {
        alert(`Task added successfully`)
      } else if (result.status == 406) {
        alert(result.response.data)
      } else {
        alert(`Something went wrong`)
      }

      handleClose()
    }

  }
  //get Task logics
  const getTask = async () => {
    const result = await gettaskAPI()
    setShowtask(result.data)

  }

  // delete task logics
  const handleDelete = async(id)=>{
    const result = await removetaskAPI(id)
    console.log(result);
    if(result.status==200){
      setRemovetask(result)
      alert(`Task Deleted successfully`)
    }else{
      alert(`error`)
    }
    
  }
  console.log(showtask);
  useEffect(() => {
    getTask()
  }, [removetask])


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
           {showtask?.map((item)=>( <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center p-1">
              <Card style={{ width: '18rem', fontWeight: "bold" }} className='rounded text-center py-lg-3 py-2  my-lg-4 my-2  bg-primary text-light'>
                <Card.Body>
                  <Card.Title >{item.title}</Card.Title>
                  <Card.Text>
                   {item.description}
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
                    <button className='btn btn-danger rounded' onClick={()=>handleDelete(item?._id)}>Delete</button>
                  </div>
                </Card.Body>
              </Card>
            </div>))}

          </div>


        </div>

      </div>

    </>
  )
}

export default Homepage