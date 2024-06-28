import React, { useState } from 'react'
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
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CModal,
  CFormTextarea,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilChatBubble, cilFilter, cilSave } from '@coreui/icons'

const Accordion = () => {
  const [visible, setVisible] = useState(false)
  return (
    <CRow>
      
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
          <h2 className="my-3 font-bold" style={{color: "#334388"}}>Oportunidades públicas</h2>
          </CCardHeader>
          
          <CCardBody>
          <h4 className="my-3 font-bold" style={{color: "#334388"}}>Licitações públicas selecionadas</h4>
            
            <div >
            <CForm style={{display:"flex", alignItems: "center", justifyContent:"space-between", width:"100%"}}>
  <CFormInput
    style={{width: "60%"}}
    type="search"
    id="exampleFormControlInput1"
    placeholder="Pesquisar..."
    aria-describedby="exampleFormControlInputHelpInline"
  />
  
  <CFormSelect
  aria-label="Default select example"
  style={{width: "20%"}}
  options={[
    'Meus filtros',
    { label: 'Aço', value: '1' },
    { label: 'Válvula', value: '2' },
    { label: 'Parafuso', value: '3', disabled: true }
  ]}
/>

</CForm>
<div style={{display:"flex"}}>
<CFormSwitch className='mt-2 mb-2' label="Oportunidades sugeridas" id="formSwitchCheckChecked" defaultChecked/>
<CFormSwitch className='mt-2 mb-2' label="Minhas participações" id="formSwitchCheckChecked" style={{marginLeft: "8px"}}/>
</div>
</div>
            
          </CCardBody>

          <CCardBody>
          <h6 style={{color: "#334388"}}>Filtros:</h6>
          
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

               <CModal
      visible={visible}
      onClose={() => setVisible(false)}
      aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader>
        <CModalTitle id="LiveDemoExampleLabel">Sala de Colaboração</CModalTitle>
      </CModalHeader>
      <CModalBody>
      <CForm>
  <CFormTextarea
    id="exampleFormControlTextarea1"
    label="Digite sua mensagem"
    rows={3}
  ></CFormTextarea>
</CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Cancelar
        </CButton>
        <CButton color="primary" onClick={() => setVisible(false)}>Enviar</CButton>
      </CModalFooter>
    </CModal>
          <CTable responsive="sm" striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">Id</CTableHeaderCell>
      <CTableHeaderCell scope="col">Fit</CTableHeaderCell>
      <CTableHeaderCell scope="col">Categoria</CTableHeaderCell>
      <CTableHeaderCell scope="col">Título</CTableHeaderCell>
      <CTableHeaderCell scope="col">Local</CTableHeaderCell>
      <CTableHeaderCell scope="col">Data Inicio</CTableHeaderCell>
      <CTableHeaderCell scope="col">Data Fim</CTableHeaderCell>
      <CTableHeaderCell scope="col">Colaboração</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>98%</CTableDataCell>
      <CTableDataCell>Petrobras</CTableDataCell>
      <CTableDataCell>Tubo sem costura em aço</CTableDataCell>
      <CTableDataCell>Rio de Janeiro</CTableDataCell>
      <CTableDataCell>01/01/2024</CTableDataCell>
      <CTableDataCell>31/12/2024</CTableDataCell>
      <CTableDataCell></CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>85%</CTableDataCell>
      <CTableDataCell>Petrobras</CTableDataCell>
      <CTableDataCell>Aquisição de válvulas gaveta</CTableDataCell>
      <CTableDataCell>Rio de Janeiro</CTableDataCell>
      <CTableDataCell>01/01/2024</CTableDataCell>
      <CTableDataCell>31/12/2024</CTableDataCell>
      <CTableDataCell style={{textAlign: "center"}}>
        <a onClick={() => setVisible(!visible)}>
        <CIcon icon={cilChatBubble} />
        </a>
      </CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell>70%</CTableDataCell>
      <CTableDataCell>Petrobras</CTableDataCell>
      <CTableDataCell>Aquisição de Mangueira</CTableDataCell>
      <CTableDataCell>Rio de Janeiro</CTableDataCell>
      <CTableDataCell>01/01/2024</CTableDataCell>
      <CTableDataCell>31/12/2024</CTableDataCell>
      <CTableDataCell></CTableDataCell>
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

export default Accordion
