"use server";

import { apiGETFetch } from "./api";
import {
    HomeIntroProps,
    HomeSliderProps,
    HomeAmenitiesProps,
    HomeGalleryProps,
    HomeLandmarkProps,
    HomePortfolioProps,
    AboutPanchshilProps
} from "@/types/api";

export const getHomeSliders = async () => apiGETFetch<HomeSliderProps[]>(`home/slider`);

export const getIntroduction = async () => apiGETFetch<HomeIntroProps>(`home/introduction`);

export const getHomeAmenities = async () => apiGETFetch<HomeAmenitiesProps[]>(`home/amenities`);

export const getHomeGallery = async () => apiGETFetch<HomeGalleryProps[]>(`home/gallery`);

export const getHomeLandmarks = async () => apiGETFetch<HomeLandmarkProps[]>(`home/landmarks`);

export const getHomePortfolio = async () => apiGETFetch<HomePortfolioProps[]>(`home/portfolio`);

export const getAboutPanchshil = async () => apiGETFetch<AboutPanchshilProps>(`home/about-panchshil`);