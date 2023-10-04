import { Text, Flex, Image, SimpleGrid, Grid } from "@chakra-ui/react";
import SHARE from "@assets/share.png";

export default function ProductCard({ data }: any) {
  return (
    <Grid gap={5} mt={10} mb={16}>
      {data.map((item: any) => {
        return (
          <a
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
              // className="bg-text"
              backgroundColor={"transparent"}
              border={"1px"}
              borderColor={"black"}
              fontWeight={500}
            >
              <Text letterSpacing={"0.5px"}>{item.number}.</Text>
              <Text letterSpacing={"0.5px"} textAlign={"center"}>
                {/* {item.title.replace(/[0-9]/g, "")} */}
                {item.title}
              </Text>
              <Flex justifyContent={"end"} boxSize={"25px"}>
                <Image src={SHARE.src} w={"20px"} h={"20px"} alt="share" />
              </Flex>
            </Flex>
          </a>
        );
      })}
    </Grid>
  );
}
