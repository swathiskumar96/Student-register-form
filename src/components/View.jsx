import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getRegisterAPI } from '../services/allAPI'

function View() {
  const [viewDetails, setViewDetails] = useState([])
  useEffect(() => {
    getAllDetails()
  }, [])

  const getAllDetails = async () => {
    try {
      const result = await getRegisterAPI()
      console.log(result);
      if (result.status == 200) {
        setViewDetails(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }
  console.log(viewDetails);

  return (
    <>
      <h1 className='mt-3 text-center fw-bolder'>Student Details</h1>
      <div className='container mt-3 border'>
        <Table className='striped bordered hover' >
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Course</th>
            </tr>
          </thead>
          {viewDetails?.length > 0 ?
            viewDetails?.map(view => (
              <tbody>
                <tr>
                  <td>{view.name}</td>
                  <td>{view.address}</td>
                  <td>{view.mobile}</td>
                  <td>{view.email}</td>
                  <td>{view.gender}</td>
                  <td>{view.dob}</td>
                  <td>{view.course}</td>
                </tr>
              </tbody>
            )) :
            <div>No Data</div>
          }
        </Table>
      </div>
    </>
  )
}

export default View