import React,{useState,useEffect} from 'react'

import {
  //CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CCollapse,
  CButtonGroup,
  CDataTable,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import { Redirect } from 'react-router-dom';
import BatchData from '../users/BatchData'



const fields = [
  {key: 'id',_style: { width: '20%'}},
  { key: 'batch_name', _style: { width: '20%'} },
  
  { key: 'course_id', _style: { width: '20%'} },
  { key: 'course_name', _style: { width: '50%'} },
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  }
]

{/*const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}*/}
{/*const fields = ['name','address', 'email']*/}
{/*const styles={display: "flex" ,marginLeft: "auto"}*/}
const BatchManage = () => {
  const [details, setDetails] = useState([])
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  const [redirect, setRedirect] = useState(false);
  const [redirect1, setRedirect1] = useState(false);
    function onUpdateBatch() {

    setRedirect(true);
}
function onDeleteBatch() {

  setRedirect1(true);
}

  return (
    
      <CRow >
        <CCol >
          <CCard>
            <CCardHeader>
              Batch Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={BatchData}
              fields={fields}
              hover
              display= "flex"
              striped
              bordered
              size="sm"
            
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'show_details':
                          (item, index)=>{
                            return (
                              <td className="py-2">
                                <CButton
                                  color="primary"
                                  variant="outline"
                                  shape="square"
                                  size="sm"
                                  onClick={()=>{toggleDetails(index)}}
                                >
                                  {details.includes(index) ? 'Hide' : 'Show'}
                                </CButton>
                              </td>
                              )
                          },
                        'details':
                            (item, index)=>{
                              return (
                              <CCollapse show={details.includes(index)}>
                                <CCardBody>
                                  <h4>
                                    Batch Information
                                  </h4>
                                  <p className="text-muted">Batch ID:{item.id}</p>
                                  <p className="text-muted">Batch Name:{item.batch_name}</p>
                                  <p className="text-muted">Batch Active:{item.batch_is_active}</p>
                                  <p className="text-muted">Course ID:{item.course_id}</p>
                                  <p className="text-muted">Course Name:{item.course_name}</p>
                                  <p className="text-muted">Batch Start Time:{item.batch_start_time}</p>
                                  <p className="text-muted">Batch End Time:{item.batch_end_time}</p>
                                  <p className="text-muted">Final Presentation Date:{item.final_presentation_date}</p>
                                  <CButton size="sm" color="info" className="ml-1" onClick={onUpdateBatch}>
                                    Edit{redirect?<Redirect push to="/batch/BatchForm"/>:null}
                                    
                                  </CButton>
                                  <CButton size="sm" color="danger" className="ml-1">
                                    Delete
                                  </CButton>
                                </CCardBody>
                              </CCollapse>
                            )
                          }
                }}
            />
            
    {/*<CButton  marginLeft= "auto"  color="secondary">Edit</CButton>
    <CButton color="secondary">Confirm</CButton>
    <CButton color="secondary">Delete</CButton>
  */}
               
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    )
}
export default BatchManage