import Typography from '@mui/material/Typography';

const SectionTitle = ({ children }) => {
  return (
    <Typography
      variant="h5"
      component="h4"
      sx={{ mb: 1, textDecoration: 'underline' }}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
