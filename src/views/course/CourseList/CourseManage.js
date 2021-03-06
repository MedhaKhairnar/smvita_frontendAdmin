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
import usersData from '../../users/UsersData';
import CourseData from '../../users/CourseData';


const fields = [
  {key: 'id',_style: { width: '20%'}},
  { key: 'course_name', _style: { width: '20%'} },
  
  { key: 'course_fees', _style: { width: '20%'} },
  { key: 'course_enquiry_counter', _style: { width: '50%'} },
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
const CourseManage = () => {
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
    function onUpdateCourse() {

    setRedirect(true);
}
function onDeleteEnquirer() {

  setRedirect1(true);
}

  return (
    
      <CRow >
        <CCol >
          <CCard>
            <CCardHeader>
              Course Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={CourseData}
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
                                    Courses Information
                                  </h4>
                                  <p className="text-muted">Course ID:{item.id}</p>
                                  <p className="text-muted">Course Name:{item.course_name}</p>
                                  <p className="text-muted">Course Active:{item.course_is_active}</p>
                                  <p className="text-muted">Course Fees:{item.course_fees}</p>
                                  <p className="text-muted">Course Duration:{item.course_duration}</p>
                                  <p className="text-muted">Course Description:{item.course_description}</p>
                                  <p className="text-muted">Course Syllabus:{item.course_syllabus}</p>
                                  <p className="text-muted">Eligible Age Group:{item.age_grp_type}</p>
                                  <p className="text-muted">Course Counter:{item.course_enquiry_counter}</p>
                                  <p className="text-muted">Course Cover Photo:{item.cover_photo}</p>
                                  <p className="text-muted">Course Video:{item.video_id}</p>
                                  <CButton size="sm" color="info" className="ml-1" onClick={onUpdateCourse}>
                                    Edit{redirect?<Redirect push to="/course/CourseForm"/>:null}
                                    
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
export default CourseManage