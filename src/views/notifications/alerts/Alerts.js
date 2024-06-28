import React from 'react'
import {
  CAlert,
  CAlertHeading,
  CAlertLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Alerts = () => {
  return (
    <>
    <CCard className="mb-4" >
      <CCardHeader>
      <h2 className="my-3 font-bold" style={{color: "#334388"}}>Treinamento</h2>
      </CCardHeader>
      <CCardBody >
      <h6 className="my-3 font-bold" style={{color: "#334388"}}>Videos</h6>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/pVJXrvf_usU?si=7heJPt5NbAXeiH3R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </CCardBody>
      <CCardBody >
      <h6 className="my-3 font-bold" style={{color: "#334388"}}>Guias Rapidos</h6>
      <a target="_blank" href="https://www.petronect.com.br/irj/go/km/docs/documents/Petronect/Conteudo_Publico/por/GuiasRapidos/guias/ATD-MT-0253%20%E2%80%93%20ENVIO%20DE%20PROPOSTA%20-%20LEI%2013.30316-38771345.pdf">Envio de proposta - Lei 13.303/16</a>
      </CCardBody>
    </CCard>
  </>
  )
}

export default Alerts
