import { createClient } from "next-sanity";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Image,
  Flex,
  Center,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import ProductCard from "@src/components/home/product-card";
import X from "@assets/close.png";
import ReactPaginate from "react-paginate";
import { log } from "console";

export default function Home({ data }: any) {
  const propsData = data.sort(sort_by_id());
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);

  /* start - script pagination */
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = keyword
    ? result.slice(itemOffset, endOffset)
    : propsData.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(
    keyword ? result.length / itemsPerPage : propsData.length / itemsPerPage
  );

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = keyword
      ? (event.selected * itemsPerPage) % result.length
      : (event.selected * itemsPerPage) % propsData.length;
    setItemOffset(newOffset);
  };
  /* end - script pagination */

  function sort_by_id() {
    return function (elem1: any, elem2: any) {
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
            setItemOffset(0);

            return y || x;
          })
        : propsData
    );
  }, [keyword, propsData]);

  return (
    <>
      <Box pt={16}>
        <InputGroup>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="cari nomer / nama disini ?"
            border={"1px"}
            borderColor={"black"}
            letterSpacing={"0.5px"}
            size={"lg"}
            py={5}
            className="bg-text"
            _placeholder={{ color: "black", fontWeight: 400 }}
            shadow={"none"}
            _focus={{ border: "1px", borderColor: "black", shadow: "none" }}
            _hover={{ border: "1px", borderColor: "black", shadow: "none" }}
          />
          <InputRightElement>
            <Search2Icon mt={2} mr={2} />
          </InputRightElement>
        </InputGroup>
      </Box>
      {/* Product Number & Name */}
      {result.length > 0 ? (
        <>
          {currentItems.length <= itemsPerPage && (
            <Center mt={10}>
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next Page >"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel="< Back Page"
                renderOnZeroPageCount={null}
                pageRangeDisplayed={0}
                marginPagesDisplayed={0}
                className="react-paginate-custome"
              />
            </Center>
          )}
          <ProductCard data={currentItems} />
        </>
      ) : (
        <Flex
          mt={"30%"}
          gap={10}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image src={X.src} w={"80px"} h={"80px"} alt="not-found" />
          <Text letterSpacing={"0.5px"}>ups coba kata kunci lain</Text>
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
