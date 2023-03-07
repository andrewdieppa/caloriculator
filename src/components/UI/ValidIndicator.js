import { Box, Zoom } from '@mui/material';
import { ArrowUpward, ArrowDownward, ThumbUp } from '@mui/icons-material';

const ValidIndicator = ({ validityVar }) => {
  return (
    <>
      {validityVar < 100 && (
        <Zoom in={true} timeout={500}>
          <ArrowUpward color="warning" />
        </Zoom>
      )}
      {validityVar === 100 && (
        <Zoom in={true} timeout={500}>
          <ThumbUp color="secondary" />
        </Zoom>
      )}
      {validityVar > 100 && (
        <Zoom in={true} timeout={500}>
          <ArrowDownward color="error" />
        </Zoom>
      )}
    </>
  );
};

export default ValidIndicator;
