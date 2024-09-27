import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel
} from "@chakra-ui/react";
import Settings from "./Settings";
import PowerLight from "./PowerLight";
import EffectTitle from "./EffectTitle";
import { AllSettings } from "@/types/types";

interface EffectItemProps {
  title: string;
  data: AllSettings;
}

const EffectItem = ({ title, data }: EffectItemProps) => {
  return (
    <AccordionItem
      isDisabled={!data.isActive}
      color="white"
      border="none"
      mb="8px"
    >
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
              <EffectTitle title={title} data={data} />
            </Box>
            <PowerLight isActive={isExpanded} />
          </AccordionButton>
          <AccordionPanel pb={4} bg="#141923" borderBottomRadius="12px">
            <Settings settings={data.settings} />
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default EffectItem;
