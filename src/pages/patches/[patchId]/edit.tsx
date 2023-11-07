import { GetServerSidePropsContext } from "next";
import { Box } from "@chakra-ui/react";
import { getOneMethod } from "@/helpers/services";
import PatchEditing from "@/components/PatchEditing";

import { Patch } from "@/types/types";
interface EditPageProps {
  patch: Patch;
}
const EditPage = ({ patch }: EditPageProps) => {
  console.log(patch);
  return (
    <Box>
      <PatchEditing type="edit" patch={patch} />
    </Box>
  );
};

export default EditPage;

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
