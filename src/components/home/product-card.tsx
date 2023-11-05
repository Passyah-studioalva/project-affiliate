import { Text, Flex, Image, Grid } from "@chakra-ui/react";
import SHARE from "@assets/share.png";
import Link from "next/link";

export default function ProductCard({ data }: any) {
  return (
    <Grid gap={5} mt={10} mb={16}>
      {data?.map((item: any) => {
        return (
          <>
            {item.link ? (
              <Link
                key={item._id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flex
                  p={3}
                  rounded={"md"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  fontWeight={500}
                  className="product-button-link"
                >
                  <Text letterSpacing={"0.5px"}>{item.number}.</Text>
                  <Text letterSpacing={"0.5px"} textAlign={"center"}>
                    {item.title}
                  </Text>
                  <Flex justifyContent={"end"} boxSize={"25px"}>
                    <Image src={SHARE.src} w={"20px"} h={"20px"} alt="share" />
                  </Flex>
                </Flex>
              </Link>
            ) : (
              <Link key={item._id} href={item.slug.current}>
                <Flex
                  p={3}
                  rounded={"md"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  fontWeight={500}
                  className="product-button-link"
                >
                  <Text letterSpacing={"0.5px"}>{item.number}.</Text>
                  <Text letterSpacing={"0.5px"} textAlign={"center"}>
                    {item.title}
                  </Text>
                  <Flex justifyContent={"end"} boxSize={"25px"}>
                    <Image src={SHARE.src} w={"20px"} h={"20px"} alt="share" />
                  </Flex>
                </Flex>
              </Link>
            )}
          </>
        );
      })}
    </Grid>
  );
}
