import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTab,
  CTabList,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTabs,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import { CChart } from '@coreui/react-chartjs'

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4 p-4">
        
          <CRow>
            <h5 style={{color: "#334388"}}>Histórico de Oportunidades Públicas</h5>
              <br></br>
            <CChart
  type="line" 
  data={{
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    datasets: [
      {
        label: "Vencidas",
        backgroundColor: "green",
        borderColor: "green",
        pointBackgroundColor: "green",
        pointBorderColor: "#fff",
        data: [14, 55, 38, 91, 6, 73, 79, 53, 82, 43, 93, 73]
      },
      {
        label: "Perdidas",
        backgroundColor: "red",
        borderColor: "red",
        pointBackgroundColor: "red",
        pointBorderColor: "#fff",
        data: [40, 77, 7, 93, 22, 41, 66, 11, 99, 84, 44, 30]
      },
      {
        label: "Declinadas",
        backgroundColor: "purple",
        borderColor: "purple",
        pointBackgroundColor: "purple",
        pointBorderColor: "#fff",
        data: [25, 49, 98, 26, 58, 24, 48, 40, 85, 20, 36, 8]
      },
    ],
  }}
  options={{
    maintainAspectRatio: false, // Para garantir que o gráfico seja responsivo
    responsive: true,           // Para tornar o gráfico responsivo
    plugins: {
      legend: {
        labels: {
          color: "#000",
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: "#e1e1e1",
        },
        ticks: {
          color: "#e1e1e1",
        },
      },
      y: {
        grid: {
          color: "#e1e1e1",
        },
        ticks: {
          color: "#e1e1e1",
        },
      },
    },
  }}
/>
<br></br>
<h5 style={{color: "#334388"}}>Histórico de Oportunidades de Dispensa</h5>
              <br></br>
<CChart
  type="line" 
  data={{
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    datasets: [
      {
        label: "Vencidas",
        backgroundColor: "green",
        borderColor: "green",
        pointBackgroundColor: "green",
        pointBorderColor: "#fff",
        data: [14, 55, 38, 91, 6, 73, 79, 53, 82, 43, 93, 73]
      },
      {
        label: "Perdidas",
        backgroundColor: "red",
        borderColor: "red",
        pointBackgroundColor: "red",
        pointBorderColor: "#fff",
        data: [40, 77, 7, 93, 22, 41, 66, 11, 99, 84, 44, 30]
      },
      {
        label: "Declinadas",
        backgroundColor: "purple",
        borderColor: "purple",
        pointBackgroundColor: "purple",
        pointBorderColor: "#fff",
        data: [25, 49, 98, 26, 58, 24, 48, 40, 85, 20, 36, 8]
      },
    ],
  }}
  options={{
    maintainAspectRatio: false, // Para garantir que o gráfico seja responsivo
    responsive: true,           // Para tornar o gráfico responsivo
    plugins: {
      legend: {
        labels: {
          color: "#000",
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: "#e1e1e1",
        },
        ticks: {
          color: "#e1e1e1",
        },
      },
      y: {
        grid: {
          color: "#e1e1e1",
        },
        ticks: {
          color: "#e1e1e1",
        },
      },
    },
  }}
/>
          </CRow>
          
     
      </CCard>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
            <h4 style={{color: "#334388"}}>Faturamento</h4>
            <CTabs>
            <CTabList variant="tabs">
    <CTab itemKey="home">Taxa de Acesso</CTab>
    <CTab itemKey="profile">Premium</CTab>

  </CTabList>
  
</CTabs>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-body-secondary text-truncate small">Em aberto</div>
                        <div><p>Existem 3 faturas abertas</p></div>
                      </div>
                      <div style={{display: "flex", justifyContent: "center"}}>
                      <CButton style={{backgroundColor: "#334388", color: "#fff"}} href="#">Saiba mais</CButton>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3">
                        <div className="text-body-secondary text-truncate small">
                          Vencido
                        </div>
                        <div><p>Não há faturas vencidas!</p></div>
                      </div>
                      <div style={{display: "flex", justifyContent: "center"}}>
                      <CButton style={{backgroundColor: "#334388", color: "#fff"}} href="#">Saiba mais</CButton>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>
               
              </CRow>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
