import React from "react";
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
import WahEfx from "./inputsPerEffect/WahEfx";
import { EffectTitleType } from "@/types/types";
import { CompressorSettings, WahEfxSettings } from "@/types/types";

// import { getEffectsInputs } from "@/helpers/getEffectsInputs";

interface EffectEditorProps {
  title: EffectTitleType;
  data: { is_active: boolean; settings: AllSettings };
}

const EffectEditor = ({ title, data }: EffectEditorProps) => {
  console.log({ title, data });
  const renderInputs = (sectionTitle: typeof title) => {
    switch (sectionTitle) {
      case "compressor":
        return (
          <Compressor
            title={title}
            settings={data.settings as CompressorSettings}
          />
        );
      case "wah_efx":
        return (
          <WahEfx title={title} settings={data.settings as WahEfxSettings} />
        );
      default:
        return null;
    }
  };

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
          <AccordionPanel
            p="28px"
            pb="18px"
            bg="#141923"
            borderBottomRadius="12px"
          >
            {/* <Box>{JSON.stringify(data)}</Box> */}
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {/* <EffectsInputs title={title} settings={data.settings} /> */}
              {renderInputs(title)}
            </Box>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default EffectEditor;
