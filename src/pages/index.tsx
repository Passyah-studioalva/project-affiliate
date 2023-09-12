import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import SHARE from "@assets/share.png";
import { NextRouter, useRouter } from "next/router";
import Navbar from "@src/components/layout/navbar";
import ProductCard from "@src/components/home/product-card";
import create from 'zustand';


const useStore = create((set:any) => ({
  keyword: '',
  setKeyword: (keyword:any) =>
    set((state:any) => ({
      ...state,
      keyword,
    })),
}));

export default function Home({ data }: any) {
  const router = useRouter() as NextRouter;
  const keyword = useStore((state:any) => state.keyword);
  const setKeyword = useStore((state:any) => state.setKeyword);
  const builder = imageUrlBuilder(client);
  const urlFor = (source: any) => {
    return builder.image(source);
  };

  const [result, setResult] = useState([]);

  const resultKey = () => {
    if (keyword) {
      return data.filter((e: any) => {
        const y = e.title
          .toLowerCase()
          .includes(keyword.toLowerCase());
        return setResult(y)
      });
    } else {
      return setResult(data);
    }
  }

  console.log(result);
  


  return (
    <>
      <Box pt={10}>
        <InputGroup>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            bgColor={"white"}
            placeholder="mau cari apa ?"
          />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>
        <Text mb="8px">Value: {keyword}</Text>
      </Box>
      {/* Product Name */}
      {/* <ProductCard data={result} /> */}
      {result.map((item: any) => {
        return <Text key={item._id}>{item.title}</Text>;
      })}

      {/* {data.map((item: any) => {
        return <Text key={item._id}>{item.title}</Text>;
      })} */}
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
