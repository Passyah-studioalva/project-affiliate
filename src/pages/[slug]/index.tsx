import { useRouter } from "next/router";
import { Center, Link, Text, Box } from "@chakra-ui/react";
import { createClient } from "next-sanity";
import ProductSlug from "@src/components/slug/product-slug";

interface Props {
  // datas: PropsData[];
  datas: any;
}

const SlugPage: React.FC<Props> = ({ datas }) => {
  const router = useRouter();
  const data = datas.filter(
    (item: any) => item?.slug?.current === router.query.slug
  );

  return (
    <>
      <Box pt={"18%"}>
        <Link href="/">
          <Box
            w={"max-content"}
            p={"10px"}
            textColor={"black"}
            className="button-back"
          >
            {"< "}Back
          </Box>
        </Link>
      </Box>

      <Center
        as="h1"
        mt={"10%"}
        rounded={"md"}
        p={3}
        className="product-button-link"
        letterSpacing={"0.5px"}
        fontWeight={500}
      >
        {data[0]?.title}
      </Center>

      {data[0].category && data[0].category.length > 0 && (
        <Box
          className="container-grid-slug"
          maxW={"sm"}
          margin={"auto"}
          gap={5}
          pt={"10%"}
        >
          {data[0].category.map((item: any, idx: number) => {
            return <ProductSlug key={idx} data={item} />;
          })}
        </Box>
      )}
    </>
  );
};

export default SlugPage;

const client = createClient({
  projectId: "iwjwzghi",
  dataset: "production",
  /* YY - MM - DD */
  apiVersion: "2023-11-09",
  useCdn: true,
});

export const getStaticProps = async () => {
  const datas = await client.fetch(`*[_type == "shopee"] {
    ...,
    category[]-> {
      ...,
      icon {
        ...,
        "url":asset->.url
      }
    }
  }`);

  return {
    props: {
      datas,
    },
    revalidate: 10, // In seconds
  };
};

export const getStaticPaths = async () => {
  const datas = await client.fetch(`*[_type == "shopee"]`);

  return {
    paths: datas.map(({ slug }: any) => `/${slug}`) || [],
    fallback: "blocking",
  };
};
