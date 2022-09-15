import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import reactIMG from './../../../assets/images/theme.png'
import './projects2.css'
import { CRow,
    CCard,
    CButton,
    CCardBody,
    CCol,
    CCardImage, 
    CCardTitle, 
    CCardText,
    CCardFooter,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CFormLabel,
    CFormInput,
    CFormTextarea,
    CMultiSelect,
   } from '@coreui/react'

function projects() {
    
    const [visible, setVisible] = useState(false)
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
 
  return (
    <>
        <div className='header2'>Projects
            <CButton className='projects-button' color="info" variant="outline" onClick={() => setVisible(!visible)}>Create Project</CButton>

            <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader>
                <CModalTitle>Create Project</CModalTitle>
                </CModalHeader>
            <CModalBody>
                <CFormLabel htmlFor="exampleFormControlTextarea1">Name: </CFormLabel>
                <CFormInput type="text" placeholder="Enter Project Name" aria-label="default input example"/>
                <CFormLabel className='description' htmlFor="exampleFormControlTextarea1">Description: </CFormLabel>
                <CFormTextarea id="exampleFormControlTextarea1" rows="3" placeholder="Enter a project description"></CFormTextarea>
                <CFormLabel className='description' htmlFor="exampleFormControlTextarea1">Team Name: </CFormLabel>
                <CFormInput type="text" placeholder="Enter Team Name" aria-label="default input example"/>
                <CFormLabel className='description' htmlFor="exampleFormControlTextarea1">Assigned to: </CFormLabel>
                <Select options={options} isMulti/>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
                </CButton>
                <CButton color="primary">Save changes</CButton>
            </CModalFooter>
            </CModal>
        </div>

            
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src={reactIMG} />
                <CCardBody>
                    <CCardTitle>Project 1</CCardTitle>
                    <CCardText>
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                    </CCardText>
                    <a href="projects2/task2" className="stretched-link"></a>
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
                    <CCardTitle>Project 2</CCardTitle>
                    <CCardText>
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                    </CCardText>
                    <a href="./projects2/task2" className="stretched-link"></a>
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
                    <CCardTitle>Project 3</CCardTitle>
                    <CCardText>
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                    </CCardText>
                    <a href="./projects2/task2" className="stretched-link"></a>
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
                    <CCardTitle>Project 4</CCardTitle>
                    <CCardText>
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                    </CCardText>
                    <a href="./projects2/task2" className="stretched-link"></a>
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

export default projects