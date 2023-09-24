import { getOneMethod } from "@/helpers/services";
const PatchDetailPage = ({ patch }) => {
  console.log(patch);
  return <div>Patch Details page</div>;
};

export default PatchDetailPage;

export async function getServerSideProps(context) {
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
    return {
      redirect: {
        destination: "/error",
        permanent: false
      }
    };
  }
}
