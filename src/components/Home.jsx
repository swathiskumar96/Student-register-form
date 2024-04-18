import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()

  const [userInputs, setUserInputs] = useState({
    name: "", address: "", mobile: "", email: "", gender: "", dob: "", course: ""
  })
  console.log(userInputs);

  const handleRegister = async (e) => {
    e.preventDefault()
    if (userInputs.name && userInputs.address && userInputs.mobile && userInputs.email && userInputs.gender && userInputs.dob && userInputs.course)
      //api call
      try {
        const result = await registerAPI(userInputs)
        console.log(result);
        if (result.status == 200) {
          toast.success("Register Sucessfully")
          setUserInputs({ name: "", address: "", mobile: "", email: "", gender: "", dob: "", course: "" })
          setTimeout(() => {
            navigate('/view')
          }, 2000)
        }
      } catch (err) {
        console.log(err);
      }
    else {
      toast.warning("Please fill the form completely")
    }
  }

  return (
    <>
      <Container>
        <h1 className='text-center fw-bolder mt-3'>Apply as a Student</h1>
        <div className='w-50 container mt-3 border'>
          <Form className='my-3'>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control value={userInputs.name} onChange={e => setUserInputs({ ...userInputs, name: e.target.value })} type="text" name="name" />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control value={userInputs.address} onChange={e => setUserInputs({ ...userInputs, address: e.target.value })} type="text" name="address" />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control value={userInputs.mobile} onChange={e => setUserInputs({ ...userInputs, mobile: e.target.value })} type="number" name="mobile" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control value={userInputs.email} onChange={e => setUserInputs({ ...userInputs, email: e.target.value })} type="email" name="email" />
            </Form.Group>

            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control value={userInputs.gender} onChange={e => setUserInputs({ ...userInputs, gender: e.target.value })} as="select" name="gender">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control value={userInputs.dob} onChange={e => setUserInputs({ ...userInputs, dob: e.target.value })} type="date" name="dob" />
            </Form.Group>

            <Form.Group controlId="formCourse">
              <Form.Label>Course</Form.Label>
              <Form.Control value={userInputs.course} onChange={e => setUserInputs({ ...userInputs, course: e.target.value })} as="select" name="course">
                <option value="">Select</option>
                <option value="biology">Biology</option>
                <option value="computerScience">Computer Science</option>
                <option value="commerce">Commerce</option>
                <option value="humanities">Humanities</option>
              </Form.Control>
            </Form.Group>

            <div className='mt-3 text-center'>
              <Button onClick={handleRegister} variant="primary" type="submit">
                Register
              </Button>
              <Button variant="secondary" className="ml-2 ms-3" onClick={() => setUserInputs({
                name: '',
                address: '',
                mobile: '',
                email: '',
                gender: '',
                dob: '',
                course: '',
              })}>
                Cancel
              </Button>

            </div>
          </Form>
        </div>
      </Container>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Home