import React, { useState } from 'react'
import { 
  CButton, 
  CButtonToolbar, 
  CCard, 
  CCardBody, 
  CCardHeader, 
  CCol, 
  CForm, 
  CFormInput, 
  CFormSelect, 
  CProgress, 
  CRow, 
  CTable, 
  CTableBody, 
  CTableDataCell, 
  CTableHead, 
  CTableHeaderCell, 
  CTableRow, 
  CFormSwitch, 
  CButtonGroup, 
  CCardImage,
  CCardTitle,
  CCardText,
  CWidgetStatsB,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
} from '@coreui/react';
import { DocsExample } from 'src/components'

const FormControl = () => {
  const [visible, setVisible] = useState(false)
  return (
    <CRow>

      
      
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
        <h2 className="my-3 font-bold" style={{color: "#334388"}}>Sugestão Famílias</h2>
        </CCardHeader>
        
        
    

        <CCardBody style={{display: "flex", justifyContent:"space-between"}}>

        <CCard style={{ width: '18rem' }}>
  <CCardBody>
    <CCardTitle>Minérios e minerais</CCardTitle>
    <CCardText>
    98009956
    </CCardText>
    <CButton color="primary" onClick={() => setVisible(!visible)}>Clique para mais detalhes</CButton>
    <CModal
      visible={visible}
      onClose={() => setVisible(false)}
      aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader>
        <CModalTitle id="LiveDemoExampleLabel">Título</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>Descrição da família </p>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Fechar
        </CButton>
        <CButton color="primary" onClick={() => setVisible(false)}>Ok</CButton>
      </CModalFooter>
    </CModal>
  </CCardBody>
</CCard>

<CCard style={{ width: '18rem' }}>
  <CCardBody>
    <CCardTitle>Explosivo para desmonte de rocha</CCardTitle>
    <CCardText>
    98009915
    </CCardText>
    <CButton color="primary" onClick={() => setVisible(!visible)}>Clique para mais detalhes</CButton>
  </CCardBody>
</CCard>

<CCard style={{ width: '18rem' }}>
  <CCardBody>
    <CCardTitle>Revestimento de base poliuréia</CCardTitle>
    <CCardText>
    98011446
    </CCardText>
    <CButton color="primary" onClick={() => setVisible(!visible)}>Clique para mais detalhes</CButton>
  </CCardBody>
</CCard>
        </CCardBody>

      </CCard>
    </CCol>
  </CRow>
  )
}

export default FormControl
