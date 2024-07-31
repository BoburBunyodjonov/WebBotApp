import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";

// Components
import { Prices } from "../index";
import { Button } from "@mui/material";

// Icon 

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function UnstyledTabsIntroduction() {
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>юр. лицо</Tab>
        <Tab value={1}>физ. лицо</Tab>
      </TabsList>
      <TabPanel value={0} className="text-center">
        <Prices />
      </TabPanel>
      <TabPanel value={1} className="text-center">
        <Prices />
        <Button  size="large" className=" w-full md:w-3/12" color="primary" variant="contained" startIcon={<ArrowUpwardIcon className="bg-white text-blue-500 rounded-full" />}>Вывести </Button>
      </TabPanel>
    </Tabs>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  padding: 10px 12px;
  margin: 6px;
  width: 100%;

  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${grey[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: #000;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "inherit"};
  border-radius: 12px;
  `
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  background-color: ${grey[400]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  `
);
