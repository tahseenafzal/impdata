import { useEffect, useState, useMemo } from "react";
import {
  Box,
  Input,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import CityItem from "./CityItem";
import { CityType } from "@/interfaces/city";
import debounce from "lodash/debounce";

const CityPage = () => {
  const [cities, setCities] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/city");
      const data = await res.json();
      setCities(data);
    };

    getData();
  }, [searchText]);

  const debouncedSearch = useMemo(
    () =>
      debounce((searchVal) => {
        setSearchText(searchVal);
      }, 500),
    []
  );

  const letSearch = (e) => {
    debouncedSearch(e.target.value);
  };

  const filteredData = useMemo(() => {
    if (searchText) {
      const searches = searchText.trim().toLowerCase().split(" ");

      return cities.filter((city: CityType) =>
        searches.every((word) =>
          `${city.CityID}${city.CityName}${city.Country.ConName}`
            .toLowerCase()
            .includes(word)
        )
      );
    } else {
      return cities;
    }
  }, [searchText]);

  return (
    <Box bgColor={"white"} maxW={"full"} h={"full"}>
      <Input
        placeholder="Search City"
        variant={"flushed"}
        px={10}
        mb={4}
        borderBottom={"2px"}
        borderColor={"teal"}
        onChange={letSearch}
      />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>CITY ID</Th>
              <Th>CITY NAME</Th>
              <Th>COUNTRY NAME</Th>
              <Th w={36}>ACTIONS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {searchText
              ? filteredData.map((city: CityType) => {
                  return (
                    <CityItem
                      key={city.CityID}
                      cityId={city.CityID}
                      cityName={city.CityName}
                      country={city.Country.ConName}
                    />
                  );
                })
              : cities.map((city: CityType) => {
                  return (
                    <CityItem
                      key={city.CityID}
                      cityId={city.CityID}
                      cityName={city.CityName}
                      country={city.Country.ConName}
                    />
                  );
                })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CityPage;
