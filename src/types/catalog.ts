export type CatalogItem = {
  image: {
    src: string
    width: number
    height: number
  }
  cap: string
  descr: string
  link: string
  specifications?: Array<{
    name: string
    unit: string
    value: string
  }>
}
