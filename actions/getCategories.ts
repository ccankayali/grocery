import axios from "axios";
import { Category } from "@/types";

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/categories?populate=*`;

export const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await axios.get(Urls);
    const data = res.data.data;
    return data;
  } catch (error) {
    throw error;
  }
};
