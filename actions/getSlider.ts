import axios from "axios";
import { Slider } from "@/types";

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/sliders?populate=*`;

export const getSlider = async (): Promise<Slider[]> => {
  try {
    const res = await axios.get(Urls);
    const data = res.data.data;
    return data;
  } catch (error) {
    throw error;
  }
};
