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

export default function Home({ data }: any) {
  const propsData = data.sort(sort_by_id());
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(propsData);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 101;

  // if results array change, go to the first page
  useEffect(() => {
    setItemOffset(0);

    setCurrentPage(0);
  }, [result]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(result.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(result.length / itemsPerPage));
  }, [result, itemsPerPage, itemOffset]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % result.length;

    setItemOffset(newOffset);

    setCurrentPage(event.selected);
  };

  function sort_by_id() {
    return function (elem1: any, elem2: any) {
      if (elem1.number < elem2.number) {
        return -1;
      } else if (elem1.number > elem2.number) {
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
          <Center mt={10}>
            <ReactPaginate
              breakLabel="..."
              onPageChange={handlePageClick}
              pageRangeDisplayed={0}
              marginPagesDisplayed={0}
              pageCount={pageCount}
              forcePage={currentPage}
              previousLabel="< Back"
              nextLabel="Next >"
              renderOnZeroPageCount={null}
              className="react-paginate-custome"
            />
          </Center>

          <ProductCard data={currentItems} />
        </>
      ) : (
        <Flex
          mt={"40%"}
          gap={10}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image src={X.src} w={"80px"} h={"80px"} alt="not-found" />
          <Text fontSize={20}>ups coba kata kunci lain</Text>
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
