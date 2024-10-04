import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  Button,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  ButtonGroup,
  Box,
  Slider,
  Switch,
  Badge,
  InputLabel,
} from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
    },
  },
});

export default function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [selectedValue, setSelectedValue] = useState("option1");

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setSelectedValue(value);
    if (value === "option2") {
      import("./secondTheme").then((module) => {
        setTheme(createTheme(module.default));
      });
    } else {
      setTheme(defaultTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h1" component="h2" gutterBottom color="primary">
          Welcome to MUI with Vite
        </Typography>
      </Box>
      <Container>
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose an option</FormLabel>
          <RadioGroup aria-label="options" name="options" value={selectedValue} onChange={handleRadioChange}>
            <FormControlLabel value="option1" control={<Radio />} label="Default Theme" />
            <FormControlLabel value="option2" control={<Radio />} label="Alternate Theme" />
          </RadioGroup>
        </FormControl>
      </Container>

      <Box sx={{ mb: 4 }}>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Box>
      <Box sx={{ mb: 4 }}>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Slider defaultValue={30} aria-label="Disabled slider" />
      </Box>
      <Box sx={{ mb: 4 }}>
        <Switch {...label} defaultChecked />
        <Switch {...label} />
        <Switch {...label} disabled defaultChecked />
        <Switch {...label} disabled />
      </Box>

      <Box sx={{ mb: 4 }}>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="action" />
        </Badge>
      </Box>

      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", mb: 4 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
