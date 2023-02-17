import { Remove, Add } from '@mui/icons-material';

import { Box, IconButton, Stack, TextField } from '@mui/material';

const Counter = ({ label, value, onDec, onInc, adornment }) => {
  return (
    <Stack direction="row">
      <Box>
        <IconButton size="small" onClick={onDec}>
          <Remove />
        </IconButton>
      </Box>
      <Box width={adornment ? 100 : 70}>
        <TextField
          type="number"
          inputProps={{
            style: { textAlign: 'center' },
          }}
          InputProps={{
            startAdornment: adornment ? adornment : null,
            readOnly: true,
          }}
          id={label}
          label={label}
          variant="outlined"
          size="small"
          value={value}
        />
      </Box>
      <Box>
        <IconButton size="small" onClick={onInc}>
          <Add />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default Counter;
