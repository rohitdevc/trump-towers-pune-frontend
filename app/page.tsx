import {
  getIntroduction,
  getHomeSliders,
  getHomeLandmarks,
  getHomePortfolio,
  getHomeAmenities,
  getHomeGallery,
  getAboutPanchshil
} from '@/lib/home';

import {
  getMetaData,
  getBanner
} from '@/lib/common';

import HomePage from "@/components/pages/home";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

export async function generateMetadata() {
  const [meta_data, banner] = await Promise.all([
    getMetaData("Home"),
    getBanner("Home"),
  ]);

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page() {
  const [
    introduction,
    sliders,
    amenities,
    gallery,
    landmarks,
    portfolios,
    aboutPanchshil
  ] = await Promise.all([
    getIntroduction(),
    getHomeSliders(),
    getHomeAmenities(),
    getHomeGallery(),
    getHomeLandmarks(),
    getHomePortfolio(),
    getAboutPanchshil()
  ])

  return (
    <HomePage
    sliders={sliders}
    introduction={introduction}
    amenities={amenities}
    gallery={gallery}
    landmarks={landmarks}
    portfolio={portfolios}
    aboutPanchshil={aboutPanchshil}
    />
  )
}