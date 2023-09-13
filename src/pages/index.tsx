import { createClient } from "next-sanity";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import ProductCard from "@src/components/home/product-card";
import X from "@assets/close.png";

export default function Home({ data }: any) {
  const propsData = data.sort(sort_by_id())
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);

  function sort_by_id() {
    return function (elem1:any, elem2:any) {
      if (elem1.number < elem2.number) {
        return -1;
      } else if (elem1.id > elem2.id) {
        return 1;
      } else {
        return 0;
      }
    };
  }

  useEffect(() => {
    setResult(
      keyword
        ? propsData.filter((e: any) => {
            const y = e.title.toLowerCase().includes(keyword.toLowerCase());
            const x = e.number
              .toString()
              .toLowerCase()
              .includes(keyword.toString().toLowerCase());

            return y || x;
          })
        : propsData
    );
  }, [keyword, propsData]);

  return (
    <>
      <Box pt={10}>
        <InputGroup>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            bgColor={"white"}
            placeholder="cari nomer / nama disini ?"
            border={"1px"}
            borderColor={"blue.600"}
            letterSpacing={"0.5px"}
          />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>
      </Box>
      {/* Product Number & Name */}
      {result.length > 0 ? (
        <ProductCard data={result} />
      ) : (
        <Flex
          mt={"30%"}
          gap={10}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image src={X.src} w={"80px"} h={"80px"} alt="not-found" />
          <Text>ups coba kata kunci lain</Text>
        </Flex>
      )}
    </>
  );
}

const client = createClient({
  projectId: "iwjwzghi",
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
