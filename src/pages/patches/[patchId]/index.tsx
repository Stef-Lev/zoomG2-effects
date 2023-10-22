import { getOneMethod } from "@/helpers/services";
import { GetServerSidePropsContext } from "next";
import { IPatch } from "@/types/types";
import DetailsHeader from "@/components/DetailsHeader";
import { Box, Container, Heading, Accordion } from "@chakra-ui/react";
import PowerLight from "@/components/PowerLight";
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
  const patchSections = Object.entries(patch);
  console.log(patchSections);
  return (
    <Box>
      <DetailsHeader />
      <Container pt="50px">
        <Heading as="h3" textAlign="center" color="highlightBlue">
          {patch.name}
        </Heading>
        <Accordion allowMultiple>
          <EffectItem />
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
