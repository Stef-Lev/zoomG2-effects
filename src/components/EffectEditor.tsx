import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel
} from "@chakra-ui/react";
import PowerLight from "./PowerLight";
import { AllSettings } from "@/types/types";
import { effectsTexts } from "@/helpers/textTransform";
import validationValues from "@/helpers/validationValues";
import DropdownMenu from "./inputs/DropdownMenu";

interface EffectEditorProps {
  title: string;
  data: AllSettings;
}

const EffectEditor = ({ title, data }: EffectEditorProps) => {
  console.log(validationValues[title as keyof typeof validationValues]);

  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <h2>{effectsTexts[title as keyof typeof effectsTexts]}</h2>
            </Box>
            <PowerLight isActive={isExpanded} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box>{JSON.stringify(data)}</Box>
            <Box></Box>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default EffectEditor;
