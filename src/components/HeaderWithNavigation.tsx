import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

const HeaderWithNavigation = () => {
  const router = useRouter();
  const display = useBreakpointValue({ base: "block", md: "none" });
  return (
    <Box display="flex" padding="12px 8px" w="100%" h="50px" color="white">
      <Box _hover={{ cursor: "pointer" }} display={display}>
        <FaArrowLeft size="26px" onClick={() => router.back()} />
      </Box>
    </Box>
  );
};

export default HeaderWithNavigation;
