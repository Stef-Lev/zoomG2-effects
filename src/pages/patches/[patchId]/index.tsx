import { getOneMethod } from "@/helpers/services";
import { GetServerSidePropsContext } from "next";
import { IPatch } from "@/types/types";
import DetailsHeader from "@/components/DetailsHeader";
import { Box, Container, Heading, Accordion } from "@chakra-ui/react";
import PedalCode from "@/components/PedalCode";
import EffectItem from "@/components/EffectItem";

interface PatchDetailPageProps {
  patch: IPatch;
}

const PatchDetailPage = ({ patch }: PatchDetailPageProps) => {
  const arr = [
    "compressor",
    "wah_efx",
    "znr",
    "drive",
    "eq",
    "extra_eq",
    "mod_sfx",
    "delay",
    "reverb"
  ];
  const patchSections = Object.entries(patch.effects);
  console.log(patchSections);
  const activeIndices = patchSections
    .map(([_, data], index) => (data.isActive ? index : -1))
    .filter(index => index !== -1);

  return (
    <Box>
      <DetailsHeader />
      <Container pt="50px" pb="60px">
        <Box display="flex" gap="10px" marginBottom="20px" alignItems="center">
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
