import React from 'react'
import { useState } from 'react'
import './dashboard.css'
import reactIMG from './../../assets/images/theme.png'
import { CRow,
  CCard,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
  CFormTextarea,
  CFormLabel,
  CCardBody,
  CCol,
  CCardImage, 
  CCardTitle, 
  CCardText,
  CCardFooter
 } from '@coreui/react' 

function Dashboard() {
  
  const [visible, setVisible] = useState(false)

  return (
    <>
    <div className='header2'>SPL

    <CButton className='dashboard-button' color="info" variant="outline" onClick={() => setVisible(!visible)}>Create Room</CButton>

      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Create Room</CModalTitle>
        </CModalHeader>
      <CModalBody>
        <CFormLabel htmlFor="exampleFormControlTextarea1">Name: </CFormLabel>
        <CFormInput type="text" placeholder="Insert Room Name" aria-label="default input example"/>
        <CFormLabel className='description' htmlFor="exampleFormControlTextarea1">Description: </CFormLabel>
        <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
        <CButton color="primary">Save changes</CButton>
      </CModalFooter>
    </CModal>
    </div>

    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src={reactIMG}/>
          <CCardBody >
            <CCardTitle>SPL-II</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
            <a href="./dashboard/projects" className="stretched-link"></a>
          </CCardBody>
          <CCardFooter>
            <small className="text-medium-emphasis">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard rd>
          <CCardImage orientation="top" src={reactIMG} />
          <CCardBody>
            <CCardTitle size='lg'>SPL-I</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
            <a href="#" className="stretched-link"></a>
          </CCardBody>
          <CCardFooter>
            <small className="text-medium-emphasis">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      </CRow>

    </>
    
  )
}

export default Dashboard