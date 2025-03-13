import Gallery from "@/components/gallery";

import { client } from "@/lib/contentful";

async function getData() {
  const res = await client.getEntries({ content_type: "gallery" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res;
}

export default async function Page() {
  const galleries = await getData();

  return (
    <>
      <Gallery galleries={galleries.items} />
    </>
  );
}
