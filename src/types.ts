export interface IProduct {
  id?: number
  title?: string
  oldPrice?: number
  price?: number
  image?: string
  inStock?: boolean
  provider?: string
}

export interface ICartItem {
  product: IProduct
  qnt: number
}

export interface ICatalogProductCardProps {
  product: IProduct
}
