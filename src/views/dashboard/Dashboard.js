import React from 'react'
import reactIMG from './../../assets/images/theme.png'
import { CRow,
  CCard,
  CCardBody,
  CCol,
  CCardImage, 
  CCardTitle, 
  CCardText,
  CCardFooter
 } from '@coreui/react' 

function Dashboard() {
  return (
    <>
    <div>SPL</div>
    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
      <CCol xs>
        <CCard>
        <CCardImage orientation="top" src={reactIMG}/>
          <CCardBody>
          
            <CCardTitle>SPL-II</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-medium-emphasis">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard>
          <CCardImage orientation="top" src={reactIMG} />
          <CCardBody>
            <CCardTitle>SPL-I</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
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