import { Select, Box, Text } from "@chakra-ui/react";
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
        onChange={e => setActiveFilter(e.currentTarget.value)}
      >
        {filterTypes.map(filter => (
          <option key={`_filter_${filter.id}`} value={filter.id}>
            {filter.text}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default FiltersDropdown;
