import { Text, Flex, Image, SimpleGrid, Grid } from "@chakra-ui/react";
import SHARE from "@assets/share.png";

export default function ProductCard({ data }: any) {
  return (
    <Grid gap={5} mt={10}>
      {data.map((item: any) => {
        return (
          <a
            key={item._id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Flex p={3} rounded={"md"} bg={"yellow.100"} alignItems={"center"} justifyContent={"space-between"}>
              <Text letterSpacing={"0.5px"}>{item.number}.</Text>
              <Text letterSpacing={"0.5px"} textAlign={"center"}>{item.title}</Text>
              <Flex justifyContent={"end"}>
                <Image src={SHARE.src} w={"25px"} h={"25px"} alt="share" />
              </Flex>
            </Flex>
          </a>
        );
      })}
    </Grid>
  );
}
