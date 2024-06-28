import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCardImage, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { brandSet } from '@coreui/icons'
import { DocsCallout } from 'src/components'

const toKebabCase = (str) => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export const getIconsView = (iconset) => {
  return Object.entries(iconset).map(([name, value]) => (
    <CCol className="mb-5" xs={6} sm={4} md={3} xl={2} key={name}>
      <CIcon icon={value} size="xxl" />
      <div>{toKebabCase(name)}</div>
    </CCol>
  ))
}

const CoreUIIcons = () => {
  return (
    <>
      <CCard className="mb-4" >
        <CCardHeader>
        <h2 className="my-3 font-bold" style={{color: "#334388"}}>Blog</h2>
        </CCardHeader>
        <CCardBody >
          <CRow>
          <CCard style={{ width: '100%', padding: "10px" }}>
  <CCardBody>
    <CCardImage style={{width: "200px"}} src="https://mercosulnegocios.com.br/wp-content/uploads/2024/04/Petronect-470x350.jpg" />
    <CCardTitle>Petronect é recertificada em ESG 360 pela Bureau Veritas</CCardTitle>
    <CCardText>
    A empresa recebeu a classificação Engajado, por seus projetos e ções em ecoeficiência, cadeia de suprimento e atuação junto à comunidade local
    </CCardText>
    <CButton color="primary" target='_blank' href="https://mercosulnegocios.com.br/petronect-recertificada-esg-bureau-veritas/">Leia mais</CButton>
  </CCardBody>
</CCard> </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIIcons
