import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react";

type InputNumberProps = {
  id: string;
  min: number;
  max: number;
};

const InputNumber = ({ id, min, max }: InputNumberProps) => {
  return (
    <NumberInput id={id} min={min} max={max}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default InputNumber;
