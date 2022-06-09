import { StaticImageData } from "next/image"

export interface IProduct {
  id: string
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