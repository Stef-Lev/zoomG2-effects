import { Select } from "@chakra-ui/react";
type DropdownMenuProps = {
  id: string;
  options: string[];
  value: string;
  handleChange: (
    ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const DropdownMenu = ({
  id,
  value,
  options,
  handleChange
}: DropdownMenuProps) => {
  return (
    <Select
      id={id}
      value={value}
      onChange={ev => handleChange(ev)}
      width="90px"
    >
      {options.map((option, index) => (
        <option key={`option_${index + 1}`} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default DropdownMenu;
