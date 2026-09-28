import {
  getMetaData,
  getBanner
} from '@/lib/common';

import ThankYouPage from "@/components/pages/thank-you";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

export async function generateMetadata() {
  const [meta_data, banner] = await Promise.all([
    getMetaData("Thank You"),
    getBanner("Home"),
  ]);

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page() {
  return (
    <ThankYouPage />
  )
}