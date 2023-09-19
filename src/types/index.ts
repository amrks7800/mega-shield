import { ReactNode } from "react"

export type User = {
  name: string
  id: string
  role: string
}

export type LoginInfo = {
  email: string
  password: string
}

export interface RegisterInfo extends LoginInfo {
  name: string
}

export type DashboardLinkProps = {
  to: string
  children: ReactNode
  activeKey: string
}
