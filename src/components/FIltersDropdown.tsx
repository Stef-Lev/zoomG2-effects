import { Select, Box, Text, background } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { FilterType } from "@/pages/patches";
import { FaFilter } from "react-icons/fa";
type FiltersDropdownProps = {
  filterTypes: FilterType[];
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
};
const FiltersDropdown = ({
  filterTypes,
  activeFilter,
  setActiveFilter
}: FiltersDropdownProps) => {
  return (
    <Box display="flex" alignItems="center" mb="20px">
      <Box display="flex" alignItems="center" gap="5px" mr="10px">
        <Text fontSize={20}>Filter</Text>
        <FaFilter size={20} />
      </Box>

      <Select
        defaultValue={activeFilter}
        variant="filled"
        background="#2e3441"
        _hover={{ background: "#2e3441", cursor: "pointer" }}
        _focus={{ background: "#2e3441", cursor: "pointer", outline: "none" }}
        onChange={e => setActiveFilter(e.currentTarget.value)}
        _expanded={{ background: "red" }}
      >
        {filterTypes.map(filter => (
          <option
            key={`_filter_${filter.id}`}
            value={filter.id}
            style={{ background: "#e2e8f0", color: "#1a202c" }}
          >
            {filter.text}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default FiltersDropdown;
