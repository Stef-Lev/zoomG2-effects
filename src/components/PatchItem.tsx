import { IPatch } from "@/types/types";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
interface PatchItemProps {
  patch: IPatch;
}

const PatchItem = ({ patch }: PatchItemProps) => {
  const router = useRouter();

  return (
    <Box
      px="16px"
      py="8px"
      h="100px"
      border="2px solid #2e3441"
      borderRadius="10px"
      bg="#2e3441"
      onClick={() => router.push(`/patches/${patch._id}`)}
    >
      <Box
        w="100%"
        h="10px"
        display="flex"
        justifyContent="space-between"
        mb="10px"
      >
        <Box w="10px" h="10px" bg="red.400" borderRadius="50%"></Box>
        <Box w="10px" h="10px" bg="red.400" borderRadius="50%"></Box>
      </Box>
      <Box fontStyle="pedalCode">{patch.pedalCode}</Box>
      {patch.name}
    </Box>
  );
};

export default PatchItem;
