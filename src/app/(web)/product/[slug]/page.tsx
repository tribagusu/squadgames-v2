import { notFound } from "next/navigation";
import { productFaqConfigData } from "@/config/product-faq.config";
import { client } from "@/lib/contentful";
import ProductItem from "@/components/product-item";

export async function generateStaticParams() {
  const entry = await client.getEntries({ content_type: "product" });
  return entry.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const products = await client.getEntries({ content_type: "product" });
  const product = products?.items?.find(
    (product) => product.fields.slug === params.slug
  );

  return {
    title: product?.fields?.name,
    description: product?.fields?.description,
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const data = await client.getEntries({ content_type: "product" });
  const product = data?.items?.find(
    (product) => product.fields.slug === params.slug
  );
  if (!product) notFound();

  const faq = productFaqConfigData.find(
    (faq) => faq.title === product.fields.name
  );

  return (
    <>
      <ProductItem product={product} faq={faq} />
    </>
  );
}
