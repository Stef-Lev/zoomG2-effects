import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

const DetailsHeader = () => {
  const router = useRouter();
  return (
    <Box
      display="flex"
      padding="12px 8px"
      position="absolute"
      top="0"
      left="0"
      w="100%"
    >
      <FaArrowLeft size="26px" onClick={() => router.back()} />
    </Box>
  );
};

export default DetailsHeader;
