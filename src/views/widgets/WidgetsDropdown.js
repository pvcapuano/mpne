import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CWidgetStatsF,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilChartPie, cilOptions } from '@coreui/icons'

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CRow>
      <CCard className="mx-3 my-3" style={{ width: '12rem' }}>
  <CCardBody className="d-flex flex-column justify-content-between h-100">
    <div>
      <CCardTitle style={{ color: "#334388" }}>Públicas</CCardTitle>
      <CCardText>
        Você tem <span style={{ color: "#334388", fontWeight: "bold", textDecorationLine: "underline" }}>12</span> oportunidades em andamento.
      </CCardText>
    </div>
    <CButton style={{ backgroundColor: "#334388", color: "#fff" }} href="#">Saiba mais</CButton>
  </CCardBody>
</CCard>
      <CCard className="mx-3 my-3 flex justify-space-between" style={{ width: '12rem' }}>
        <CCardBody className="d-flex flex-column justify-content-between h-100">
          <CCardTitle style={{color: "#334388"}}>Dispensas (DPV)</CCardTitle>
          <CCardText>
          Você tem <span style={{color: "#334388", fontWeight: "bold", textDecorationLine: "underline"}}>28</span> oportunidades em andamento.
          </CCardText>
          <CButton style={{backgroundColor: "#334388", color: "#fff"}} href="#">Saiba mais</CButton>
        </CCardBody>
      </CCard>
      <CCard className="mx-3 my-3 flex justify-space-between" style={{ width: '12rem'  }}>
        <CCardBody className="d-flex flex-column justify-content-between h-100">
          <CCardTitle style={{color: "#334388"}}>Sugestão</CCardTitle>
          <CCardText>
          Você tem <span style={{color: "#334388", fontWeight: "bold", textDecorationLine: "underline"}}>55</span> sugestões de oportunidades públicas.
          </CCardText>
          <CButton style={{backgroundColor: "#334388", color: "#fff"}} href="#">Saiba mais</CButton>
        </CCardBody>
      </CCard>
      <CCard className="mx-3 my-3 flex justify-space-between" style={{ width: '12rem'}}>
        <CCardBody className="d-flex flex-column justify-content-between h-100">
          <CCardTitle style={{color: "#334388"}}>Sugestão</CCardTitle>
          <CCardText>
          Você tem <span style={{color: "#334388", fontWeight: "bold", textDecorationLine: "underline"}}>13</span> sugestões de familias.
          </CCardText>
          <CButton style={{backgroundColor: "#334388", color: "#fff"}} href="#">Saiba mais</CButton>
        </CCardBody>
      </CCard>
  </CRow>
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
