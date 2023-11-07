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
        variant="outline"
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
