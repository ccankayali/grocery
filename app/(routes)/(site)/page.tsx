import { getCategories } from "@/actions/getCategories";
import { getProducts } from "@/actions/getProducts";
import { getSlider } from "@/actions/getSlider";
import Categories from "@/components/Categories";
import Slider from "@/components/Slider";
import ProductList from "@/components/Product/ProductList";

export default async function Home() {
  const sliderlist = await getSlider();
  const CategoriesList = await getCategories();
  const productList = await getProducts();

  return (
    <div className="px-3">
      <Slider sliderList={sliderlist} />
      <Categories categoryList={CategoriesList} />
      <ProductList productList={productList} />
    </div>
  );
}
