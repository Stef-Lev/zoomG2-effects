import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel
} from "@chakra-ui/react";
import PowerLight from "./PowerLight";
import { AllSettings } from "@/types/types";
import { effectsTexts } from "@/helpers/textTransform";
import EffectsInputs from "./inputs/EffectsInputs";
// import { getEffectsInputs } from "@/helpers/getEffectsInputs";

interface EffectEditorProps {
  title: string;
  data: AllSettings;
}

const EffectEditor = ({ title, data }: EffectEditorProps) => {
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
            {/* <Box>{JSON.stringify(data)}</Box> */}
            <Box>
              <EffectsInputs title={title} settings={data.settings} />
            </Box>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default EffectEditor;
