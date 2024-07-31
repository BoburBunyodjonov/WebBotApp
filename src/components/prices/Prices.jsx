// Material UI
import { Box, Card, Typography } from "@mui/material";

// Fonts
import '@fontsource/roboto/500.css';

import currency from "currency.js";

const Prices = () => {
  const formattedAmount = currency(403200000 / 100, { precision: 2 }).format();

  return (
    <>
      <Box p={3}>
        <Typography
          className="text-center text-[#848488]"
          variant="span"
          component="h2"
        >
          Доступные
        </Typography>
        <Typography className="text-center" variant="h4">
          {formattedAmount}
        </Typography>
      </Box>
      <Box display="flex" gap={2} py={3}>
        <Card className="w-full p-3 rounded-2xl">
          <Typography variant="span">В обработке</Typography>
          <Typography variant="h5">32 000,00 ₽</Typography>
          <Typography variant="h5">2 000,00 $</Typography>
        </Card>
        <Card className="w-full p-3">
          <Typography variant="span">Замороженные</Typography>
          <Typography color={"#FF9400"} variant="h5">
            2 332 000,00 ₽
          </Typography>
          <Typography color={"#FF9400"} variant="h5">
            2 000,00 $
          </Typography>
        </Card>
      </Box>
    </>
  );
};

export default Prices;
