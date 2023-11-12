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
import InputNumber from "./inputs/InputNumber";
import { getEffectsInputs } from "@/helpers/getEffectsInputs";

interface EffectEditorProps {
  title: string;
  data: AllSettings;
}

const EffectEditor = ({ title, data }: EffectEditorProps) => {
  // console.log(validationValues[title as keyof typeof validationValues]);
  // console.log(Object.entries(data.settings));
  const settings = Object.entries(data.settings);
  getEffectsInputs(title, data.settings);
  // console.log(
  //   settings.map(([key, value]) => {
  //     if (typeof value === "number") {
  //       return {
  //         type: "number",
  //         setting: key,
  //         obj: validationValues[title][key]
  //       };
  //     } else {
  //       return `option ${value}`;
  //     }
  //   })
  // );
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
            <Box>
              {/* {settings.map(([key, value]) => {
                if (typeof value === "number") {
                  return (
                    <InputNumber
                      key={key}
                      id={key}
                      defaultValue={value}
                      min={validationValues[title][key].min}
                      max={validationValues[title][key].max}
                    />
                  );
                } else {
                  return (
                    <DropdownMenu
                      key={key}
                      id={key}
                      options={validationValues[title][key]}
                      value={value}
                      handleChange={() => console.log("CHANGE")}
                    />
                  );
                }
              })} */}
            </Box>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default EffectEditor;
