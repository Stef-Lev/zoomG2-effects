import { getOneMethod } from "@/helpers/services";
import { GetServerSidePropsContext } from "next";
import { IPatch } from "@/types/types";
import HeaderWithNavigation from "@/components/HeaderWithNavigation";
import { Box, Container, Heading, Accordion } from "@chakra-ui/react";
import PedalCode from "@/components/PedalCode";
import EffectItem from "@/components/EffectItem";
import EditButton from "@/components/EditButton";

interface PatchDetailPageProps {
  patch: IPatch;
}

const PatchDetailPage = ({ patch }: PatchDetailPageProps) => {
  const patchSections = Object.entries(patch.effects);
  console.log({ patch, patchSections });
  const activeIndices = patchSections
    .map(([_, data], index) => (data.isActive ? index : -1))
    .filter(index => index !== -1);

  return (
    <Box mb="100px">
      <HeaderWithNavigation />
      <Container maxW="3xl">
        <Box
          display="flex"
          gap="10px"
          marginBottom="10px"
          alignItems="center"
          py="8px"
        >
          <Box flexBasis="85%">
            <Heading
              as="h3"
              fontSize="20px"
              textAlign="center"
              fontStyle="italic"
              color="highlightBlue"
            >
              {patch.name}
            </Heading>
          </Box>
          <Box flexBasis="15%">
            <PedalCode code={patch.pedalCode} />
          </Box>
        </Box>
        <EditButton id={patch._id} />

        <Accordion allowMultiple defaultIndex={activeIndices}>
          {patchSections.map(([title, data]) => {
            return <EffectItem key={title} title={title} data={data} />;
          })}
        </Accordion>
      </Container>
    </Box>
  );
};

export default PatchDetailPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { patchId } = context.query;

  try {
    let patch = {};

    const { req } = context;
    const baseUrl = req.headers.host;
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const apiUrl = `${protocol}://${baseUrl}/api/patches/${patchId}`;

    const fetchedData = await getOneMethod(apiUrl);

    if (fetchedData) {
      patch = fetchedData;
    }

    return {
      props: {
        patch
      }
    };
  } catch (error) {
    console.log(error);
  }
}
