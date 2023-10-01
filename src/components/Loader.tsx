import { Box, Spinner, Center, Text } from "@chakra-ui/react";

export interface ILoaderProps {
  fullScreen?: boolean;
  size?: string;
  thickness?: string;
  text?: string;
}

const Loader = ({
  fullScreen = false,
  size = "xl",
  thickness = "8px",
  text = ""
}: ILoaderProps) => {
  return (
    <Box>
      <Center height={`${fullScreen ? "50vh" : "40px"}`}>
        {text && <Text mr="10px">{text}</Text>}
        <Spinner
          thickness={thickness}
          speed="1s"
          emptyColor="pedalRed.200"
          color="pedalRed.900"
          size={size}
        />
      </Center>
    </Box>
  );
};

export default Loader;
