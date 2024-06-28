import React, { useState } from 'react'
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

const CoreUIIcons = () => {
  const [visible, setVisible] = useState(false)
  return (
    <CRow>
      
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
        <h2 className="my-3 font-bold" style={{color: "#334388"}}>Premium</h2>
        </CCardHeader>
        
        <CCardBody>
        <h4 className="my-3 font-bold" style={{color: "#334388"}}>Faturas</h4>
          
          <div >
          <CForm style={{display:"flex", alignItems: "center", justifyContent:"space-between", width:"100%"}}>
<CFormInput
  style={{width: "100%"}}
  type="search"
  id="exampleFormControlInput1"
  placeholder="Busque pelo numero do boleto..."
  aria-describedby="exampleFormControlInputHelpInline"
/>


</CForm>
</div>
          
        </CCardBody>

        <CCardBody>

        <div style={{display: "flex", justifyContent: "space-between"}}> 
        <CTabs activeItemKey="profile">
<CTabList variant="tabs">
  <CTab itemKey="home">Em aberto</CTab>
  <CTab itemKey="profile">Vencidas</CTab>
  <CTab itemKey="contact">Pagas</CTab>
</CTabList>

</CTabs>
             </div>

             <CModal
    visible={visible}
    onClose={() => setVisible(false)}
    aria-labelledby="LiveDemoExampleLabel"
  >
    <CModalHeader>
      <CModalTitle id="LiveDemoExampleLabel">Gerar pix</CModalTitle>
    </CModalHeader>
    <CModalBody>
    <CForm>
   <CIcon icon={cilQrCode} size='lg' />
</CForm>
    </CModalBody>
    <CModalFooter>
      
      <CButton color="primary" onClick={() => setVisible(false)}>Fechar</CButton>
    </CModalFooter>
  </CModal>
        <CTable responsive="sm" striped>
<CTableHead>
  <CTableRow>
    <CTableHeaderCell scope="col">Vencimento</CTableHeaderCell>
    <CTableHeaderCell scope="col">Referencia</CTableHeaderCell>
    <CTableHeaderCell scope="col">Codigo</CTableHeaderCell>
    <CTableHeaderCell scope="col">Valor</CTableHeaderCell>
    <CTableHeaderCell scope="col">Boleto</CTableHeaderCell>
    <CTableHeaderCell scope="col">Pix</CTableHeaderCell>
  </CTableRow>
</CTableHead>
<CTableBody>
  <CTableRow>
    <CTableHeaderCell scope="row">31/12/2024</CTableHeaderCell>
    <CTableDataCell>Dezembro</CTableDataCell>
    <CTableDataCell>0000</CTableDataCell>
    <CTableDataCell>R$ 999,00</CTableDataCell>
    <CTableDataCell style={{textAlign: "left"}}>
      
      <CIcon icon={cilCloudDownload} />
      
    </CTableDataCell>
    <CTableDataCell style={{textAlign: "left"}}>
      <a onClick={() => setVisible(!visible)}>
      <CIcon icon={cilMemory} />
      </a>
    </CTableDataCell>
  </CTableRow>
  <CTableRow>
    <CTableHeaderCell scope="row">31/01/2024</CTableHeaderCell>
    <CTableDataCell>Janeiro</CTableDataCell>
    <CTableDataCell>9999</CTableDataCell>
    <CTableDataCell>R$ 999,00</CTableDataCell>
    <CTableDataCell style={{textAlign: "left"}}>
      
      <CIcon icon={cilCloudDownload} />
      
    </CTableDataCell>
    <CTableDataCell style={{textAlign: "left"}}>
      <a onClick={() => setVisible(!visible)}>
      <CIcon icon={cilMemory} />
      </a>
    </CTableDataCell>
  </CTableRow>
  <CTableRow>
  <CTableHeaderCell scope="row">31/06/2024</CTableHeaderCell>
    <CTableDataCell>Junho</CTableDataCell>
    <CTableDataCell>5555</CTableDataCell>
    <CTableDataCell>R$ 999,00</CTableDataCell>
    <CTableDataCell style={{textAlign: "left"}}>
      
      <CIcon icon={cilCloudDownload} />
      
    </CTableDataCell>
    <CTableDataCell style={{textAlign: "left"}}>
      <a onClick={() => setVisible(!visible)}>
      <CIcon icon={cilMemory} />
      </a>
    </CTableDataCell>
  </CTableRow>
</CTableBody>
</CTable>

        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  )
}

export default CoreUIIcons
