import PatchEditing from "@/components/PatchEditing";
import { initialPatchState } from "@/helpers/initialState";
import { Patch } from "@/types/types";
import { Box } from "@chakra-ui/react";

const NewPatchPage = () => {
  return (
    <Box>
      <PatchEditing type="new" patch={initialPatchState as Patch} />
    </Box>
  );
};

export default NewPatchPage;
