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
  defaultValue: number;
};

const InputNumber = ({ id, min, max, defaultValue }: InputNumberProps) => {
  return (
    <NumberInput defaultValue={defaultValue || ""} id={id} min={min} max={max}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default InputNumber;
