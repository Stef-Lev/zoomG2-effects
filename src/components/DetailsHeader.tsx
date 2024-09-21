import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

const DetailsHeader = () => {
  const router = useRouter();
  return (
    <Box display="flex" padding="12px 8px" w="100%">
      <Box _hover={{ cursor: "pointer" }}>
        <FaArrowLeft size="26px" onClick={() => router.back()} />
      </Box>
    </Box>
  );
};

export default DetailsHeader;
