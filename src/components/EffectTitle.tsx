import { Text, Box } from "@chakra-ui/react";
import { effectsTexts } from "@/helpers/textTransform";
import { AllSettings } from "@/types/types";
import { SettingsWithCode } from "@/types/types";

interface EffectTitleProps {
  title: string;
  data: AllSettings;
}

const EffectTitle = ({ title, data }: EffectTitleProps) => {
  const hasCode = (
    effectItem: EffectTitleProps["data"]
  ): effectItem is SettingsWithCode => {
    return (effectItem as SettingsWithCode).settings.code !== undefined;
  };

  return (
    <Box display="flex" fontSize="18px">
      <Text color="#f5ea9f">
        {effectsTexts[title as keyof typeof effectsTexts]}
      </Text>
      {hasCode(data) && (
        <>
          <Text color="#f5ea9f" marginRight="10px">
            :
          </Text>
          <Text fontWeight="bold" color="highlightBlue">
            {data.settings.code}
          </Text>
        </>
      )}
    </Box>
  );
};

export default EffectTitle;
