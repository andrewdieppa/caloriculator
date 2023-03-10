import { Avatar, Typography } from '@mui/material';

const MacroAvatar = ({ avatarLetter, size }) => {
  return (
    <Avatar
      sx={{
        bgcolor: 'primary.main',
        width: size === 'small' ? 24 : 32,
        height: size === 'small' ? 24 : 32,
      }}
    >
      <Typography variant={size === 'small' ? 'subtitle2' : 'p'}>
        {avatarLetter}
      </Typography>
    </Avatar>
  );
};

export default MacroAvatar;
