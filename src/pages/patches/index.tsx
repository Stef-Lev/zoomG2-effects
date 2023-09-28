import { Box, Button, Heading, Image, Center } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import { getAllMethod } from "@/helpers/services";
import { IPatch } from "@/types/types";
import PatchItem from "@/components/PatchItem";

interface HomeProps {
  patches: IPatch[];
}

const Home = ({ patches }: HomeProps) => {
  console.log(patches);
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading as="h1">ZOOM G2 EFFECTS</Heading>
        <Center>
          <Image alt="pedal image" w="200px" src="/pedal.png" />
        </Center>
        <Center>
          <Button>Pedal</Button>
          <Button>Patches Catalog</Button>
        </Center>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          gap="12px"
          my="16px"
        >
          {patches.length > 0 &&
            patches.map(patch => <PatchItem key={patch._id} patch={patch} />)}
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
