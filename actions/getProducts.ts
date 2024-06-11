import axios from "axios";
import { Product } from "@/types";

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products?populate=*`;

export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await axios.get(Urls);
    const data = res.data.data;
    return data;
  } catch (error) {
    throw error;
  }
};
