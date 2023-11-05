import { Image, Grid, Center } from "@chakra-ui/react";
import Link from "next/link";

export default function ProductSlug({ data }: any) {
  return (
    <Link href={data.link} target="_blank" rel="noopener noreferrer">
      <Grid
        rounded={"md"}
        alignItems={"center"}
        className="product-button-link"
        width={"100%"}
        maxW={"182px"}
        maxH={"174px"}
        fontWeight={500}
        gap={2}
      >
        <Image
          px={5}
          src={data.icon.url}
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
          alt={data.icon.asset._ref}
        />

        <Center as="p" textAlign={"center"} letterSpacing={"0.5px"}>
          {data.subtitle}
        </Center>
      </Grid>
    </Link>
  );
}
