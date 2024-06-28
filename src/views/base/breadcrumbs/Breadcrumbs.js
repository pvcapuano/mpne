import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilFilter, cilSave } from '@coreui/icons'

const Breadcrumbs = () => {
  return (
    <CRow>
      
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
          <h2 className="my-3 font-bold" style={{color: "#334388"}}>Oportunidades de dispensa</h2>
          </CCardHeader>
          
          <CCardBody>
          <h4 className="my-3 font-bold" style={{color: "#334388"}}>Licitações DPV selecionadas</h4>
            
            <div >
            <CForm style={{display:"flex", alignItems: "center", justifyContent:"space-between", width:"100%"}}>
  <CFormInput
    style={{width: "100%"}}
    type="search"
    id="exampleFormControlInput1"
    placeholder="Pesquisar..."
    aria-describedby="exampleFormControlInputHelpInline"
  />
  


</CForm>

</div>
            
          </CCardBody>

          <CCardBody>

          <div style={{display: "flex", justifyContent: "space-between"}}> 
          <CButton as="a" color="primary" href="#" role="button">
            <CIcon style={{marginRight: "8px"}} icon={cilSave} />
               Exportar</CButton>

               <CButton as="a" color="primary" href="#" role="button">
            <CIcon icon={cilFilter} />
               </CButton>
               </div>
          <CTable responsive="sm" striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">Id</CTableHeaderCell>
      <CTableHeaderCell scope="col">Categoria</CTableHeaderCell>
      <CTableHeaderCell scope="col">Título</CTableHeaderCell>
      <CTableHeaderCell scope="col">Local</CTableHeaderCell>
      <CTableHeaderCell scope="col">Data Inicio</CTableHeaderCell>
      <CTableHeaderCell scope="col">Data Fim</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Petrobras</CTableDataCell>
      <CTableDataCell>Tubo sem costura em aço</CTableDataCell>
      <CTableDataCell>Rio de Janeiro</CTableDataCell>
      <CTableDataCell>01/01/2024</CTableDataCell>
      <CTableDataCell>31/12/2024</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Petrobras</CTableDataCell>
      <CTableDataCell>Aquisição de válvulas gaveta</CTableDataCell>
      <CTableDataCell>Rio de Janeiro</CTableDataCell>
      <CTableDataCell>01/01/2024</CTableDataCell>
      <CTableDataCell>31/12/2024</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell>Petrobras</CTableDataCell>
      <CTableDataCell>Aquisição de Mangueira</CTableDataCell>
      <CTableDataCell>Rio de Janeiro</CTableDataCell>
      <CTableDataCell>01/01/2024</CTableDataCell>
      <CTableDataCell>31/12/2024</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>

<CButtonToolbar role="group" aria-label="Toolbar with button groups">
  <CButtonGroup className="me-2" role="group" aria-label="First group">
    <CButton color="primary">1</CButton>
    <CButton color="primary">2</CButton>
    <CButton color="primary">3</CButton>
    <CButton color="primary">4</CButton>
  </CButtonGroup>
  </CButtonToolbar>
  
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Breadcrumbs
