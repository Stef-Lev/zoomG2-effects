import InputNumber from "@/components/inputs/InputNumber";
import { Text, Box } from "@chakra-ui/react";
import { settingsTexts } from "@/helpers/textTransform";
import DropdownMenu from "@/components/inputs/DropdownMenu";
import { AllSettings } from "@/types/types";
import validationValues from "@/helpers/validationValues";

interface EffectsInputsProps {
  title: string;
  settings: AllSettings["settings"];
}

const EffectsInputs = ({ title, settings }: EffectsInputsProps) => {
  const getEffectsInputs = () => {
    if (Object.hasOwn(settings, "code")) {
      const validations =
        validationValues[title as keyof typeof validationValues][settings.code];
      // console.log(validations);
      return Object.entries(validations).map(([title, validSettings]) => {
        if (Array.isArray(validSettings)) {
          return (
            <Box display="flex" alignItems="center" key={title} mb="10px">
              <Text width="85px" mr="10px">
                {settingsTexts[title]}
              </Text>

              <DropdownMenu
                id={title}
                options={validSettings}
                value={settings[title]}
              />
            </Box>
          );
        } else {
          return (
            <Box display="flex" alignItems="center" key={title} mb="10px">
              <Text width="85px" mr="10px">
                {settingsTexts[title]}
              </Text>
              <InputNumber
                id={title}
                min={validSettings.min}
                max={validSettings.max}
                defaultValue={settings[title]}
              />
            </Box>
          );
        }
      });
    } else {
      const validations =
        validationValues[title as keyof typeof validationValues];
      console.log({ validations });
      return Object.entries(validations).map(([title, validSettings]) => {
        if (Array.isArray(validSettings)) {
          return (
            <Box display="flex" key={title} alignItems="center" mb="10px">
              <Text width="85px" mr="10px">
                {settingsTexts[title]}
              </Text>

              <DropdownMenu
                id={title}
                options={validSettings}
                value={settings[title]}
              />
            </Box>
          );
        } else {
          return (
            <Box display="flex" key={title} alignItems="center" mb="10px">
              <Text width="85px" mr="10px">
                {settingsTexts[title]}
              </Text>
              <InputNumber
                id={title}
                min={validSettings.min}
                max={validSettings.max}
                defaultValue={settings[title]}
              />
            </Box>
          );
        }
      });
    }
  };

  return (
    <>
      {Object.hasOwn(settings, "code") && (
        <Box display="flex" key={title} alignItems="center" mb="10px">
          <Text width="85px" mr="10px">
            Code
          </Text>
          <DropdownMenu
            options={validationValues[title].code}
            value={settings.code}
          />
        </Box>
      )}
      {getEffectsInputs()}
    </>
  );
};

export default EffectsInputs;
