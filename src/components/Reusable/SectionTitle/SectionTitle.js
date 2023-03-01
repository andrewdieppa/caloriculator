import { Typography, Divider } from '@mui/material';

const SectionTitle = ({ children }) => {
  return (
    <>
      <Typography variant="h5" component="h4">
        {children}
      </Typography>
      <Divider sx={{ mb: 2, width: '100%', height: '1px' }} />
    </>
  );
};

export default SectionTitle;
