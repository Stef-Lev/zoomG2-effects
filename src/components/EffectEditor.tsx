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
import Compressor from "./inputsPerEffect/Compressor";
import { EffectTitleType } from "@/types/types";
// import { getEffectsInputs } from "@/helpers/getEffectsInputs";

interface EffectEditorProps {
  title: EffectTitleType;
  data: AllSettings;
}

const EffectEditor = ({ title, data }: EffectEditorProps) => {
  return (
    <AccordionItem color="white" border="none" mb="8px">
      {({ isExpanded }) => (
        <>
          <AccordionButton
            border="1px solid #141923"
            borderTopRadius="12px"
            sx={{
              WebkitTapHighlightColor: "transparent"
            }}
          >
            <Box as="span" flex="1" textAlign="left">
              <h2>{effectsTexts[title as keyof typeof effectsTexts]}</h2>
            </Box>
            <PowerLight isActive={isExpanded} />
          </AccordionButton>
          <AccordionPanel pb={4} bg="#141923" borderBottomRadius="12px">
            {/* <Box>{JSON.stringify(data)}</Box> */}
            <Box>
              <EffectsInputs title={title} settings={data.settings} />
              <Compressor title={title} settings={data.settings} />
            </Box>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default EffectEditor;
