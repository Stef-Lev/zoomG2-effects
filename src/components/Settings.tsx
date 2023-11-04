import { SettingsObject } from "@/types/types";
import { Box } from "@chakra-ui/react";
import { settingsTexts } from "@/helpers/textTransform";
import { getSettings } from "@/helpers/getSettings";

type SettingsProps = {
  settings: SettingsObject;
};

const Settings = ({ settings }: SettingsProps) => {
  const formattedTitles = getSettings(settings).map(
    item => settingsTexts[item[0] as keyof typeof settingsTexts]
  );
  const formattedSettings = getSettings(settings).map(item => item[1]);

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        {formattedTitles.map(item => (
          <Box key={item} flexBasis="33%" opacity={0.5}>
            {item}
          </Box>
        ))}
      </Box>
      <Box display="flex">
        {formattedSettings.map(item => (
          <Box key={item} flexBasis="33%">
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Settings;
