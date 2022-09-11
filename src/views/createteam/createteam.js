import React from 'react'
import './createteam.css'
import { CForm, 
  CFormLabel, 
  CFormTextarea,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CButton,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
 } from '@coreui/react'

function createteam() {
  return (
    <>
    <div className='header2'>Create Team</div>
      <CForm>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlTextarea1">Enter Student Name</CFormLabel>
          <CFormTextarea size="lg" id="exampleFormControlTextarea1" rows="5" cols="2" isMulti></CFormTextarea>
        </div>
        <div >
          <CDropdown>
            <CDropdownToggle color="secondary">Category</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">A</CDropdownItem>
              <CDropdownItem href="#">B</CDropdownItem>
              <CDropdownItem href="#">C</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CButton className='createteam-button' color="info" variant="outline">Add</CButton>
        </div>

        <div className='createteam-accordion'>
        <CAccordion flush>
          <CAccordionItem itemKey={1} className='accordion'>
            <CAccordionHeader>Category A</CAccordionHeader>
              <CAccordionBody>
                ...
              </CAccordionBody>
          </CAccordionItem>
        </CAccordion>

        <CAccordion flush>
          <CAccordionItem itemKey={1} className='accordion'>
            <CAccordionHeader>Category B</CAccordionHeader>
              <CAccordionBody>
                ...
              </CAccordionBody>
          </CAccordionItem>
        </CAccordion>

        <CAccordion flush>
          <CAccordionItem itemKey={1} className='accordion'>
            <CAccordionHeader>Category C</CAccordionHeader>
              <CAccordionBody>
                ...
              </CAccordionBody>
          </CAccordionItem>
        </CAccordion>
        </div>
        
        <div class="button2">
        <CButton color="info" variant="outline">Create Team</CButton>
        </div>
      </CForm>
    </>
  )
}

export default createteam