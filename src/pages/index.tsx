import Head from "next/head";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import {
  Box,
  Center,
  Container,
  Text,
  Flex,
  Image,
  SimpleGrid,
  Grid,
} from "@chakra-ui/react";
import SHARE from "../assets/share.png";

export default function Home({data}:any) {
  const builder = imageUrlBuilder(client);
  const urlFor = (source:any) => {
    return builder.image(source);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.md" minHeight={"100vh"} bg="blue.100">
        {/* Avatar */}
        <Center pt={10}>@Dinarmly_</Center>
        {/* Product Name */}
        <Grid gap={5} mt={10}>
          <SimpleGrid p={2} rounded={"md"} bg={"yellow.100"} columns={3}>
            <Text>01.</Text>
            <Text textAlign={"center"}>Product Name</Text>
            <Flex justifyContent={"end"}>
              <Image src={SHARE.src} w={"25px"} h={"25px"} alt="share" />
            </Flex>
          </SimpleGrid>
          <SimpleGrid p={2} rounded={"md"} bg={"yellow.100"} columns={3}>
            <Text>02.</Text>
            <Text textAlign={"center"}>Product Name</Text>
            <Flex justifyContent={"end"}>
              <Image src={SHARE.src} w={"25px"} h={"25px"} alt="share" />
            </Flex>
          </SimpleGrid>
        </Grid>
      </Container>
    </>
  );
}

const client = createClient({
  projectId: "xqpchy85",
  dataset: "production",
  /* YY - MM - DD */
  apiVersion: "2023-11-09",
  useCdn: true,
});

export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "shopee"]`);

  return {
    props: {
      data,
    },
    revalidate: 10, // In seconds
  };
}
