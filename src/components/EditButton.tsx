import { Button, Box } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/router";
type EditButtonProps = {
  id: string;
};

const EditButton = ({ id }: EditButtonProps) => {
  const router = useRouter();
  return (
    <Box display="flex" marginBottom="10px" fontWeight="normal">
      <Button
        size="sm"
        variant="filled"
        background="#2e3441"
        color="white"
        fontWeight="hairline"
        _hover={{ background: "#2e3441", cursor: "pointer" }}
        _focus={{ background: "#2e3441", cursor: "pointer", outline: "none" }}
        onClick={() => router.push(`/patches/${id}/edit`)}
      >
        <Box mr="10px">
          <FaEdit />
        </Box>
        <Box>Edit</Box>
      </Button>
    </Box>
  );
};

export default EditButton;
