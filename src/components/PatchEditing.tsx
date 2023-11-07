import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import showMsg from "@/helpers/showMsg";
import { useRouter } from "next/router";
import { postMethod, updateMethod } from "@/helpers/services";
import isDeepEqual from "deep-equal";
import { useNavigationObserver } from "@/hooks/useNavigationObserver";
import { Patch } from "@/types/types";
import AlertModal from "./AlertModal";
import DropdownMenu from "./inputs/DropdownMenu";
import validationValues from "@/helpers/validationValues";
import Number from "@/components/inputs/InputNumber";

type PatchEditingProps = {
  type: "new" | "edit";
  patch: Patch;
};

const PatchEditing = ({ type, patch }: PatchEditingProps) => {
  const [patchObj, setPatchObj] = useState(patch);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const defaultPatch = patch;
  const title = type === "new" ? "New Patch" : "Edit Patch";
  const router = useRouter();
  const { recordId } = router.query;
  const buttonBg = useColorModeValue("#dbdbdb", "#2a2c38");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigationObserver({
    shouldStopNavigation: isDirty,
    onNavigate: () => onOpen()
  });

  const setDirtyInputs = () => {
    if (!isDeepEqual(defaultPatch, patchObj)) {
      setIsDirty(true);
    } else {
      setIsDirty(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    section: "info" | "effects"
  ) => {
    if (section === "info") {
      setPatchObj(prevState => ({
        ...prevState,
        [e.target.id]: e.target.value
      }));
      setDirtyInputs();
    }
  };
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPatchObj(prevState => ({
  //     ...prevState,
  //     [e.target.id]: e.target.value
  //   }));
  //   setDirtyInputs();
  // };

  const handleSubmit = () => {
    setIsDirty(false);
    console.log("handle submit");
    // if (type === "new") {
    //   postMethod(`/api/user/${user.id}/records`, {
    //     ...recordObj,
    //     password
    //   })
    //     .then(() => router.push("/"))
    //     .then(() => showMsg("Record saved", { type: "success" }))
    //     .catch(() => showMsg("Something went wrong", { type: "error" }));
    // } else {
    //   updateMethod(`/api/user/${user.id}/records/${recordId}`, {
    //     ...recordObj,
    //     password
    //   })
    //     .then(() => router.push("/"))
    //     .then(() => showMsg("Record updated", { type: "success" }))
    //     .catch(() => showMsg("Something went wrong", { type: "error" }));
    // }
  };
  console.log({ patchObj });
  return (
    <Box py="60px">
      <Heading as="h3">{title}</Heading>
      <Box>
        <Input
          id="name"
          value={patchObj.name}
          placeholder="Record title"
          onChange={ev => handleInputChange(ev, "info")}
          _focusVisible={{ border: "2px solid", borderColor: "teal.200" }}
        />
        <DropdownMenu
          id="pedalCode"
          options={validationValues["pedalCode"]}
          value={patchObj.pedalCode}
          handleChange={ev => handleInputChange(ev, "info")}
        />
      </Box>

      <Box mt="20px">
        <Button
          type="submit"
          w="100%"
          background={buttonBg}
          _focus={{ background: buttonBg }}
          onClick={handleSubmit}
        >
          Save Record
        </Button>
      </Box>
      <AlertModal
        type="leave"
        onClose={onClose}
        isOpen={isOpen}
        callBackAction={navigate}
      />
    </Box>
  );
};

export default PatchEditing;
