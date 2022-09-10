import React from 'react'
import './projects.css'
import { CRow,
    CCard,
    CButton,
    CCardBody,
    CCol,
    CCardImage, 
    CCardTitle, 
    CCardText,
    CCardFooter
   } from '@coreui/react'

function projects() {
  return (
    <>
        <div className='header2'>SPL</div>
        <div className='header2'>Projects</div>
        <div>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="../images/theme.png" />
                <CCardBody>
                    <CCardTitle>Project 1</CCardTitle>
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
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="/images/theme.png" />
                <CCardBody>
                    <CCardTitle>Project 3</CCardTitle>
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
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="/images/theme.png" />
                <CCardBody>
                    <CCardTitle>Project 3</CCardTitle>
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
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="/images/theme.png" />
                <CCardBody>
                    <CCardTitle>Project 4</CCardTitle>
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
        </div>
    </>
    
  )
}

export default projects