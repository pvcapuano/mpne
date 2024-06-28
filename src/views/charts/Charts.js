import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormInput,
  CForm,
  CFormSelect,
  CFormSwitch,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTable,
  CTableBody,
  CTableDataCell,
  CButtonToolbar,
  CButtonGroup,
  CButton,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CModal,
  CFormTextarea,
  CTabs,
  CTabList,
  CTab,
  CTabContent,
  CTabPanel,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilChatBubble, cilCloudDownload, cilFilter, cilMemory, cilSave } from '@coreui/icons'
import { cilQrCode } from '@coreui/icons'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
        <h2 className="my-3 font-bold" style={{color: "#334388"}}>Relatórios</h2>
        </CCardHeader>
        
        

      </CCard>
    </CCol>
  </CRow>
  )
}

export default Charts
