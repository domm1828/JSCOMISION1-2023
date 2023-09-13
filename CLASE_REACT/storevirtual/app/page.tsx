'use client'
import CardProduct from "@/components/card-product"
import { products } from "./lib/products"
import Hero from "@/components/hero"
import Button from "@/components/button"
import { NewButton } from "@/components/button2"


export default function Home() {
  const variable = 34;
  return (
    <>
    <Hero/>

    <Button name="juan perez" valor={variable} >
      ejemplo de accione
    </Button>
    <NewButton />

    <div className="bg-gray-100 ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Listado de Productos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
             <CardProduct {...product} key={product.id} />
          ))}
        </div>
      </div>
    </div></>
  )
}
