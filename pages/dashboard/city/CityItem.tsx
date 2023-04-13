import { Tr, Td, HStack, IconButton } from "@chakra-ui/react";
import { FiDelete, FiEdit } from "react-icons/fi";

interface City {
  cityId: string;
  cityName: string;
  country: string;
}

const CityItem = ({ cityId, cityName, country }: City) => {
  return (
    <Tr>
      <Td>{cityId}</Td>
      <Td>{cityName}</Td>
      <Td>{country}</Td>
      <Td>
        <HStack justifyContent={"space-evenly"}>
          <IconButton
            variant={"outline"}
            colorScheme="blue"
            aria-label="Edit"
            icon={<FiEdit />}
            size={"sm"}
          />
          <IconButton
            variant={"outline"}
            colorScheme="red"
            aria-label="Delete"
            icon={<FiDelete />}
            size={"sm"}
          />
        </HStack>
      </Td>
    </Tr>
  );
};

export default CityItem;
