import { Search2Icon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const Navbar = ({ data }: any) => {
  const [value, setValue] = useState("");
  const handleChange = (event: any) => {
    setValue(event.target.value);
  } 

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        return data.filter((e: any) => {
          const y = e.title.toLowerCase().includes(value.toLowerCase());
          const x = e.number.toLowerCase().includes(
            value.toLowerCase()
          );
          return y || x;
        });
      } else {
        return data;
      }
    }
  };

  // function resultKey() {
  //   if (value.length > 0) {
  //     return data.filter((e: any) => {
  //       const y = e.title.toLowerCase().includes(value.toLowerCase());
  //       const x = e.number.toLowerCase().includes(
  //         value.toLowerCase()
  //       );
  //       return y || x;
  //     });
  //   } else {
  //     return data;
  //   }
  // }

  return (
    <Box pt={10}>
      <InputGroup>
        <Input
          value={value}
          onChange={(e) => handleChange(e)}
          onKeyPress={(e) => handleKeyPress(e)}
          bgColor={"white"}
          placeholder="mau cari apa ?"
        />
        <InputRightElement>
          <Search2Icon />
        </InputRightElement>
      </InputGroup>
      <Text position={"absolute"} mb="8px">
        Value: {value}
      </Text>
    </Box>
  );
};

export default Navbar;
