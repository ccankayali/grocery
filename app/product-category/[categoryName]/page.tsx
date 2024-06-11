import { getCategories } from '@/actions/getCategories';
import { getCategoriesDetail } from '@/actions/getCategoriesDetail';
import React from 'react'
import TopCategory from '../_components/TopCategory';
import ProductList from '@/components/Product/ProductList';

interface CategoryNamePageProps {
    params: {
        categoryName: string
    }
}

const page = async ({params}:CategoryNamePageProps) => {

    const categoryDetail = getCategoriesDetail(params.categoryName);
    const categoryList = await getCategories();

  return (
    <div>
        <h2 className='p-4 bg-green-600 text-white text-4xl mb-5'>
            {params.categoryName}
        </h2>

        <div className='p-8'>
            
         <div className='p-8 '>

            <TopCategory
            categoryList={categoryList}
            />

                <ProductList productList={await categoryDetail}/>

            </div>
        </div>
    </div>
  )
}

export default page