import { Box, Button, Heading, Image, Center, Link } from "@chakra-ui/react";
import { getAllMethod } from "@/helpers/services";

const Home = ({ data }) => {
  console.log(data.patches);
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
        <Box>
          {data.patches.length > 0 &&
            data.patches.map(patch => (
              <Link href={`/patches/${patch._id}`} key={patch._id}>
                {patch.name}
              </Link>
            ))}
        </Box>
      </Box>
    </>
  );
};
export default Home;

export async function getServerSideProps(context) {
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
        data
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
