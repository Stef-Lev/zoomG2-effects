import { CompressorSettings } from "@/types/types";
import validationValues from "@/helpers/validationValues";
import InputNumber from "../inputs/InputNumber";
import DropdownMenu from "../inputs/DropdownMenu";
import { EffectTitleType } from "@/types/types";
import { settingsTexts } from "@/helpers/textTransform";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  title: EffectTitleType;
  settings: CompressorSettings;
}

const Compressor = ({ title, settings }: Props) => {
  const renderInputs = () => {
    return Object.entries(settings).map(([key, val]) => {
      const typedKey = key as keyof CompressorSettings["settings"];
      const typedVal = val as CompressorSettings["settings"][typeof typedKey];
      const validations = validationValues[title];
      console.log({ title, typedVal });

      switch (typedKey) {
        case "sense":
        case "level":
          return (
            <Box
              display="flex"
              alignItems="center"
              key={`${title}-${typedKey}`}
              mb="10px"
            >
              <Text width="85px" mr="10px">
                {settingsTexts[typedKey]}
              </Text>
              <InputNumber
                id={typedKey}
                min={validations[typedKey as keyof typeof validations]["min"]}
                max={validations[typedKey as keyof typeof validations]["max"]}
                defaultValue={typedVal as number}
              />
            </Box>
          );
        case "attack":
          return (
            <Box display="flex" alignItems="center" key={title} mb="10px">
              <Text width="85px" mr="10px">
                {settingsTexts[typedKey]}
              </Text>

              <DropdownMenu
                id={typedKey}
                options={validations[typedKey as keyof typeof validations]}
                value={typedVal as string}
                optionStyle={{ background: "#e2e8f0", color: "#1a202c" }}
                handleChange={() => {
                  console.log("change");
                }}
              />
            </Box>
          );

        default:
          return null;
      }
    });
  };
  return (
    <Box>
      <Box>{renderInputs()}</Box>
    </Box>
  );
};

export default Compressor;
