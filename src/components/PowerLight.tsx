import { Box } from "@chakra-ui/react";
import { FaPowerOff } from "react-icons/fa";

interface PowerLightProps {
  isActive: boolean;
}

const PowerLight = ({ isActive }: PowerLightProps) => {
  const color = isActive ? "#ef3e36" : "#2e3441";
  return (
    <Box>
      <FaPowerOff size={20} color={color} />
    </Box>
  );
};

export default PowerLight;
