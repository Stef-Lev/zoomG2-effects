import { Box, Flex, Heading, Image, Center, Container } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import { getAllMethod } from "@/helpers/services";
import { IPatch } from "@/types/types";
import PatchItem from "@/components/PatchItem";
import { useMemo, useState } from "react";
import FiltersDropdown from "@/components/FIltersDropdown";

interface HomeProps {
  patches: IPatch[];
}

export type FilterType = {
  id: "all" | "in_pedal" | "archived";
  text: string;
};

const Home = ({ patches }: HomeProps) => {
  const filterTypes: FilterType[] = [
    { id: "all", text: "All" },
    { id: "in_pedal", text: "In pedal" },
    { id: "archived", text: "Archived" }
  ];
  const [filter, setFilter] = useState("in_pedal");

  function sortPatchesById(patches: IPatch[]): IPatch[] {
    const sortedArray = patches.sort((a, b) => {
      const idRegex = /^(0[1-9]|1[0-9]|[a-d]?[1-9])$/i;

      const idA = a.pedalCode || "";
      const idB = b.pedalCode || "";

      const [, prefixA, numberA] = idA.match(idRegex) || [];
      const [, prefixB, numberB] = idB.match(idRegex) || [];

      const lowerPrefixA = prefixA ? prefixA.toLowerCase() : "";
      const lowerPrefixB = prefixB ? prefixB.toLowerCase() : "";

      if (lowerPrefixA !== lowerPrefixB) {
        return lowerPrefixA.localeCompare(lowerPrefixB);
      }
      return parseInt(numberA, 10) - parseInt(numberB, 10);
    });

    return sortedArray;
  }

  const filteredPatches = useMemo(() => {
    switch (filter) {
      case "archived":
        return patches.filter(patch => !patch.inPedal);
      case "in_pedal":
        const filtered = patches.filter(patch => patch.inPedal);
        return sortPatchesById(filtered);
      default:
        return patches;
    }
  }, [filter, patches]);

  console.log(filteredPatches);

  return (
    <Container maxW="3xl" height="100vh">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        color="white"
      >
        <Heading as="h1">ZOOM G2 EFFECTS</Heading>
        <Center>
          <Image alt="pedal image" w="200px" src="/pedal.png" />
        </Center>
        <Center>
          <FiltersDropdown
            filterTypes={filterTypes}
            activeFilter={filter}
            setActiveFilter={setFilter}
          />
        </Center>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          gap="12px"
          mb="30px"
        >
          {filteredPatches.length > 0 &&
            filteredPatches.map(patch => (
              <PatchItem key={patch._id} patch={patch} />
            ))}
        </Box>
      </Box>
    </Container>
  );
};
export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    let data = [];

    const { req } = context;
    const baseUrl = req.headers.host;
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const apiUrl = `${protocol}://${baseUrl}/api/patches`;

    const fetchedData = await getAllMethod(apiUrl);
    if (fetchedData) {
      data = fetchedData;
    }

    return {
      props: {
        patches: data.patches
      }
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/error",
        permanent: false
      }
    };
  }
}

const patchesArray = [
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "A6",
  "A7",
  "A8",
  "A9",
  "B1",
  "B2",
  "B3",
  "B4",
  "B5",
  "B6",
  "B7",
  "B8",
  "B9",
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "C7",
  "C8",
  "C9",
  "D1",
  "D2",
  "D3",
  "D4",
  "D5",
  "D6",
  "D7",
  "D8",
  "D9",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20"
];
