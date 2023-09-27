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

export interface ProductProps {
  name: string
  price: string
  image: string
  description: string
}

export interface Product {
  _id: string
  name: string
  price: number
  description: string
  category: string
  colors: string[]
  featured: boolean
  freeShiping: boolean
  inventory: number
  averageRating: number
  numOfReviews: number
  user: {
    _id: string
    name: string
    email: string
  }
  createdAt: string
  updatedAt: string
  __v: number
  id: string
}

export type CloudinaryImage = {
  image: string
  size: string
}
