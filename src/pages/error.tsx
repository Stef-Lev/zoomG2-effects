import {
  Box,
  Flex,
  useBreakpointValue,
  Text,
  Heading,
  Button
} from "@chakra-ui/react";

import Icon500 from "@/components/Icon500";
import { useRouter } from "next/router";

const PageError = () => {
  const iconSize = useBreakpointValue({ base: 320, sm: 360, md: 440 });
  const router = useRouter();
  return (
    <Box pt="60px">
      <Flex alignItems="center" flexDirection="column">
        <Heading fontSize={32} mb="16px">
          Error
        </Heading>
        <Icon500 sideSize={iconSize} />
        <Text fontSize={26} mt="16px">
          Something went wrong
        </Text>
        <Button marginTop="16px" onClick={() => router.push("/")}>
          Go back home
        </Button>
      </Flex>
    </Box>
  );
};

export default PageError;
