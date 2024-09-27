import { Select } from "@chakra-ui/react";
import { CSSProperties } from "react";

type DropdownMenuProps = {
  id: string;
  options: string[];
  value: string;
  selectStyle?: CSSProperties;
  optionStyle?: CSSProperties;
  handleChange: (
    ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const DropdownMenu = ({
  id,
  value,
  options,
  selectStyle,
  optionStyle,
  handleChange
}: DropdownMenuProps) => {
  return (
    <Select
      id={id}
      value={value}
      onChange={ev => handleChange(ev)}
      width="90px"
      cursor="pointer"
      style={selectStyle}
    >
      {options.map((option, index) => (
        <option key={`option_${index + 1}`} value={option} style={optionStyle}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default DropdownMenu;
