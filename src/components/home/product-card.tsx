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
            <SimpleGrid p={2} rounded={"md"} bg={"yellow.100"} columns={3}>
              <Text>{item.number}.</Text>
              <Text textAlign={"center"}>{item.title}</Text>
              <Flex justifyContent={"end"}>
                <Image src={SHARE.src} w={"25px"} h={"25px"} alt="share" />
              </Flex>
            </SimpleGrid>
          </a>
        );
      })}
    </Grid>
  );
}
