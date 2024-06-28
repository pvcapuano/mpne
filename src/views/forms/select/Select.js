import React from 'react'
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
  CWidgetStatsB
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import { cilFilter, cilSave } from '@coreui/icons'

const Select = () => {
  return (
    <CRow>

      
      
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
        <h2 className="my-3 font-bold" style={{color: "#334388"}}>Famílias Cadastradas</h2>
        </CCardHeader>
        
        <CCardBody style={{display: "flex", justifyContent: "space-between"}}> 
       
      <CCol xs={3}>
    <CWidgetStatsB
      className="mb-3"
      progress={{ color: 'success', value: 100 }}
      title="Famílias disponíveis"
      value="1810"
    />
  </CCol>
  <CCol xs={3}>
    <CWidgetStatsB
      className="mb-3"
      progress={{ color: 'success', value: 51 }}
      title="Famílias cadastradas"
      value="915"
    />
  </CCol>
  <CCol xs={3}>
    <CWidgetStatsB
      className="mb-3"
      progress={{ color: 'danger', value: 49 }}
      title="Famílias não cadastradas"
      value="885"
    />
  </CCol>
          
        </CCardBody>

        <CCardBody>
        <CTable responsive="sm" striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">Grupo</CTableHeaderCell>
      <CTableHeaderCell scope="col">Familia</CTableHeaderCell>
      <CTableHeaderCell scope="col">Título</CTableHeaderCell>
      <CTableHeaderCell scope="col">Segmento</CTableHeaderCell>
      <CTableHeaderCell scope="col">Cadastrado</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">M-11 - Minerais, têxteis e transformados não alimentares da agropecuária</CTableHeaderCell>
      <CTableDataCell>98011446</CTableDataCell>
      <CTableDataCell>Minérios e minerais</CTableDataCell>
      <CTableDataCell>Operacional</CTableDataCell>
      <CTableDataCell>Sim</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">M-12 - Produtos químicos, bioquímicos e gases</CTableHeaderCell>
      <CTableDataCell>98009915</CTableDataCell>
      <CTableDataCell>Explosivo para desmonte de rocha</CTableDataCell>
      <CTableDataCell>Operacional</CTableDataCell>
      <CTableDataCell>Sim</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">M-12 - Produtos químicos, bioquímicos e gases</CTableHeaderCell>
      <CTableDataCell>98009956</CTableDataCell>
      <CTableDataCell>Revestimento de base poliuréia</CTableDataCell>
      <CTableDataCell>Crítica</CTableDataCell>
      <CTableDataCell>Não</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
        </CCardBody>

      </CCard>
    </CCol>
  </CRow>
  )
}

export default Select
