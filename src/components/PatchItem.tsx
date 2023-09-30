import { IPatch } from "@/types/types";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import PedalCode from "./PedalCode";
import { FaAngleRight } from "react-icons/fa";

interface PatchItemProps {
  patch: IPatch;
}

const PatchItem = ({ patch }: PatchItemProps) => {
  const router = useRouter();

  return (
    <Box
      pl="16px"
      pr="8px"
      py="8px"
      h="100px"
      border="2px solid #2e3441"
      borderRadius="10px"
      bg="#2e3441"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      onClick={() => router.push(`/patches/${patch._id}`)}
    >
      <Box fontWeight="bold" color="#85b8ff">
        <Box>{patch.name}</Box>
      </Box>
      <Box display="flex" alignItems="center">
        <PedalCode code={patch.pedalCode} />
        <Box>
          <FaAngleRight size="30px" />
        </Box>
      </Box>
    </Box>
  );
};

export default PatchItem;
