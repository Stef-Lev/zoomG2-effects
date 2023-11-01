import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  Text
} from "@chakra-ui/react";
import PowerLight from "./PowerLight";
import {
  CompressorSettings,
  WahEfxSettings,
  ZnrSettings,
  DriveSettings,
  EqSettings,
  ExtraEqSettings,
  ModSfxSettings,
  DelaySettings,
  ReverbSettings
} from "@/types/types";

interface EffectItemProps {
  title: string;
  data:
    | CompressorSettings
    | WahEfxSettings
    | ZnrSettings
    | DriveSettings
    | EqSettings
    | ExtraEqSettings
    | ModSfxSettings
    | DelaySettings
    | ReverbSettings;
}

const EffectItem = ({ title, data }: EffectItemProps) => {
  return (
    <AccordionItem isDisabled={!data.isActive}>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text textTransform="capitalize" color="#f5ea9f">
                  {title}
                </Text>
              </Box>
              <PowerLight isActive={isExpanded} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {Object.values(data.settings).map(item => {
              console.log(item);
              return <p key={item}>{item}</p>;
            })}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default EffectItem;
