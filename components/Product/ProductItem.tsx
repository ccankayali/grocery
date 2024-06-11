import { Product } from '@/types'
import Image from 'next/image';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../ui/button';
import ProductItemDetail from './ProductItemDetail';
  

interface ProductItemProps {
    product: Product;
}

const ProductItem = ({product}: ProductItemProps) => {
  return (
    <div>
            <div  className='p-1 md:p-4 lg:p-6  flex flex-col items-center justify-center
        gap-4 border rounded-xl hover:shadow-lg transition-all cursor-pointer'>
                <Image
                width={125}
                alt='alt'
                height={1}
                unoptimized={true}
                src={
                    process.env.NEXT_PUBLIC_BACKEND_BASE_URL+
                    product.attributes.images.data.attributes.url
                }   
                />
            </div>

            <Dialog>
                <DialogTrigger>
                    <Button variant="outline" className='bg-green-600 text-white'>
                        Add To Cart
                    </Button>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                {product.attributes.name}
                            </DialogTitle>
                            <DialogDescription>
                                <ProductItemDetail product={product} />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </DialogTrigger>
            </Dialog>

        <h2 className='text-green-700 font-bold text-xl'> {product.attributes.name} </h2>
        <p className='text-gray-500'>{product.attributes.sellingPrice}$</p>
    </div>
  )
}

export default ProductItem