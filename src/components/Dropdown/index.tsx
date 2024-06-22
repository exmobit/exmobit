import React, { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Currency } from '../../state/context';

interface IDropdown {
  data: Currency[];
  onChange: (value: string) => void;
  selectedData: Currency | null;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      padding: '12px 0px',
      backgroundColor: "#006960 !important"
    },
  },
};

const Dropdown: React.FC<IDropdown> = ({ data, onChange, selectedData }) => {
  const [selectedValue, setSelectedValue] = useState(selectedData?.code || '');
  useEffect(() => {
    setSelectedValue(selectedData?.code || '');
  }, [selectedData]);
  return (
    <FormControl
      sx={{ m: 1, width: 300, mt: 3 }}
      style={{ width: '150px', color: 'white', margin: '0px', height: '38px', backgroundColor: '#0069606b', borderRadius: '8px' }}
    >
      <Select
        displayEmpty
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
          onChange(e.target.value);
        }}
        input={<OutlinedInput />}
        MenuProps={MenuProps}
        style={{ color: 'white', width: '100%' }}
      >
        {data.map((name) => (
          <MenuItem key={name.code} value={name.code}>
            {name.code}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
