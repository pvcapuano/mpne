import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilCalculator
  ,
  cilChart,
  cilSpeedometer,
  cilStar,
  cibBlogger,
  cibBloggerB,
  cibMicroBlog,
  cilBook,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Oportunidades',
    to: '/base',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Públicas',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'DPV',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Familias',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sugestões',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Cadastradas',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Relatórios',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Faturamento',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Taxa de Acesso',
        to: '/icons/coreui-icons',
      },
      {
        component: CNavItem,
        name: 'Premium',
        to: '/icons/flags',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Treinamento',
    to: '/notifications/alerts',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Blog',
    to: '/icons/brands',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
