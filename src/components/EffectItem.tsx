import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon
} from "@chakra-ui/react";
import PowerLight from "./PowerLight";

const EffectItem = () => {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 1 title
              </Box>
              <PowerLight isActive={isExpanded} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default EffectItem;
