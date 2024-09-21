import { useState, useEffect } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import { FiArrowUp } from "react-icons/fi";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0);
  const ScrollStart = 300;
  const ScrollEnd = 400;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      window.scrollY > ScrollStart ? setShowButton(true) : setShowButton(false);
    };
    const calculateOpacity = () => {
      if (window.scrollY > ScrollStart && window.scrollY < ScrollEnd) {
        setOpacity((window.scrollY - ScrollStart) / (ScrollEnd - ScrollStart));
      } else {
        setOpacity(1);
      }
    };
    window.addEventListener("scroll", handleScrollBtnVisibility);
    window.addEventListener("scroll", calculateOpacity);

    return () => {
      window.removeEventListener("scroll", handleScrollBtnVisibility);
    };
  }, []);

  return (
    <>
      {showButton && (
        <Flex
          position="fixed"
          bottom="16px"
          right="16px"
          zIndex={1001}
          justifyContent="flex-end"
        >
          <Button
            w="40px"
            h="40px"
            borderRadius="8px"
            padding="0"
            background="pedalRed.100"
            color="white"
            _active={{ background: "pedalRed.200" }}
            _hover={{ background: "pedalRed.200" }}
            opacity={opacity}
            onClick={handleScrollTop}
          >
            <FiArrowUp size="24px" />
          </Button>
        </Flex>
      )}
    </>
  );
};

export default ScrollTopButton;
