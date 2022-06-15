import { StaticImageData } from "next/image"

export interface IProduct {
  id: string
  createdBy: string
  name: string
  slug: string
  price: number
  description: string
  images: Array<string | StaticImageData>
  dimensions: {
    width: number
    height: number
  }
}

export interface INavLink {
  text: string
  url: string
}

interface IUser {
  uid: string
  email: string | null
}

export type UserType = IUser | null

export type loginType = 'google' | 'github'