import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  Heading
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
    <AccordionItem isDisabled={!data.isActive}>
      {({ isExpanded }) => (
        <>
          <Heading>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <EffectTitle title={title} data={data} />
              </Box>
              <PowerLight isActive={isExpanded} />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Settings settings={data.settings} />
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default EffectItem;
