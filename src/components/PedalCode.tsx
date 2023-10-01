import { Box } from "@chakra-ui/react";
import { FaFileAlt } from "react-icons/fa";
interface PedalCodeProps {
  code: string;
}

const PedalCode = ({ code }: PedalCodeProps) => {
  if (!code) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="50px"
        h="45px"
        color="#727688"
      >
        <FaFileAlt size="30px" />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontFamily="pedalCode"
      color="pedalRed.200"
      bg="pedalRed.900"
      fontSize="30px"
      w="50px"
      h="45px"
      borderRadius="12px"
    >
      <Box>{code}</Box>
    </Box>
  );
};

export default PedalCode;
