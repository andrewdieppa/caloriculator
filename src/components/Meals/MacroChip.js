import { Avatar, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MacroChip = ({ avatarLetter, macroGrams }) => {
  const theme = useTheme();

  return (
    <Chip
      avatar={
        <Avatar
          sx={{
            bgcolor: 'primary.main',
          }}
        >
          <span
            style={{
              color: theme.palette.primary.contrastText,
            }}
          >
            {avatarLetter}
          </span>
        </Avatar>
      }
      label={`${macroGrams.toFixed(0)}g`}
    />
  );
};

export default MacroChip;
