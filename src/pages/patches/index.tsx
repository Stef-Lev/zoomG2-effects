import { Box, Flex, Heading, Image, Center } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import { getAllMethod } from "@/helpers/services";
import { IPatch } from "@/types/types";
import PatchItem from "@/components/PatchItem";
import ScrollTopButton from "@/components/ScrollTopButton";

interface HomeProps {
  patches: IPatch[];
}

const Home = ({ patches }: HomeProps) => {
  console.log(patches);
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
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading as="h1">ZOOM G2 EFFECTS</Heading>
        <Center>
          <Image alt="pedal image" w="200px" src="/pedal.png" />
        </Center>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          gap="12px"
          mb="30px"
        >
          {patches.length > 0 &&
            patches.map(patch => <PatchItem key={patch._id} patch={patch} />)}
          <ScrollTopButton />
        </Box>
      </Box>
    </>
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
