import { notFound } from "next/navigation";
import { client } from "@/lib/contentful";
import Article from "@/components/article";
import { type CaseStudyEntry } from "@/types/article.types";

export type TParams = Promise<{ slug: string }>;

export async function generateStaticParams(): Promise<
  { params: { slug: string } }[]
> {
  const entry = await client.getEntries({ content_type: "caseStudy" });
  const params = await entry.items.map((item) => ({
    params: {
      slug: item.fields.slug.toString().toLowerCase().replaceAll(" ", "-"),
    },
  }));

  return params;
}

export async function generateMetadata(props: { params: TParams }) {
  const articles = await client.getEntries({ content_type: "caseStudy" });
  const params = await props.params;
  const slug = params.slug;
  const article = articles.items.find(
    async (article) =>
      article.fields.title!.toString().toLowerCase().replaceAll(" ", "-") ===
      slug
  );

  return {
    title: article.fields.title.toString(),
    description: article.fields.trainingDesc.toString(),
  };
}

export default async function CaseStudy(props: { params: TParams }) {
  const params = await props.params;
  const slug = params.slug;
  const entry = await client.getEntries<CaseStudyEntry>({
    content_type: "caseStudy",
  });
  const caseStudy = entry.items.find(
    (caseStudy) =>
      (caseStudy.fields.title as string)
        .toString()
        .toLowerCase()
        .replaceAll(" ", "-") === slug
  );

  if (!caseStudy) notFound();

  return <Article article={caseStudy.fields} />;
}
