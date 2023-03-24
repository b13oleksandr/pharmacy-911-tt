import products from "@/mock/products.json"
import type { IProduct } from "@/types"

export const catalogService = () => {
  const fetchProducts = async (): Promise<IProduct[]> => {
    return new Promise((r) => {
      setTimeout(() => {
        // @ts-ignore
        r(products)
      }, 2000)
    })
  }

  return {
    fetchProducts
  }
}