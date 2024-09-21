import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  useColorModeValue,
  Text,
  Accordion,
  useDisclosure
} from "@chakra-ui/react";
import EffectEditor from "./EffectEditor";
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
  const buttonBg = "#dbdbdb";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigationObserver({
    shouldStopNavigation: isDirty,
    onNavigate: () => onOpen()
  });
  const patchSections = Object.entries(defaultPatch.effects);
  const activeIndices = patchSections
    .map(([_, data], index) => (data.isActive ? index : -1))
    .filter(index => index !== -1);

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
    // Go back to the id page after submission
    // router.push(window.location.pathname.replace("/edit", ""));
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

  return (
    <Box pb="60px">
      <Heading as="h3" mb="20px">
        {title}
      </Heading>
      <Box display="flex" flexDirection="column" gap="10px">
        <Text>Title</Text>
        <Input
          id="name"
          value={patchObj.name}
          placeholder="Record title"
          onChange={ev => handleInputChange(ev, "info")}
          _focusVisible={{ border: "2px solid", borderColor: "teal.200" }}
        />
        <Text>Pedal Code</Text>
        <DropdownMenu
          id="pedalCode"
          options={validationValues["pedalCode"]}
          value={patchObj.pedalCode}
          handleChange={ev => handleInputChange(ev, "info")}
        />
        <Accordion allowMultiple defaultIndex={activeIndices}>
          {patchSections.map(([title, data]) => {
            return <EffectEditor key={title} title={title} data={data} />;
          })}
        </Accordion>
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
