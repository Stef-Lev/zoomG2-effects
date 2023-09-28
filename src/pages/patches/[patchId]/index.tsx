import { getOneMethod } from "@/helpers/services";
import { GetServerSidePropsContext } from "next";
import { IPatch } from "@/types/types";

interface PatchDetailPageProps {
  patch: IPatch;
}

const PatchDetailPage = ({ patch }: PatchDetailPageProps) => {
  console.log(patch);
  return <div>Patch Details page</div>;
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
