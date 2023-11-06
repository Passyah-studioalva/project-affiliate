import { Image, Grid, Center, Box } from "@chakra-ui/react";
import Link from "next/link";

export default function ProductSlug({ category, icons }: any) {
  return (
    <Box
      className="container-grid-slug"
      maxW={"sm"}
      margin={"auto"}
      gap={5}
      pt={"10%"}
    >
      {category?.map((item: any, idx: number) => {
        return (
          <Link
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
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
                src={icons[idx].icon.src}
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                alt={"icon"}
              />
              <Center as="p" textAlign={"center"} letterSpacing={"0.5px"}>
                {item.subtitle}
              </Center>
            </Grid>
          </Link>
        );
      })}
    </Box>
  );
}
