import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './fonts/FjallaOne-Regular.ttf'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Aga from "./aga.jpeg"

interface BoardMember {
  name: string;
  position: string;
  email: string;
  telegram: string;
  imgSrc: string;
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const boardMembers: BoardMember[] = [
  {
    email: "chairman@aaltoai.com",
    name: "Matias Nieminen",
    position: "Chairman",
    telegram: "@matoskni",
    imgSrc: ""
  },
  {
    email: "partnerships@aaltoai.com",
    name: "Egor Eremin",
    position: "Partnerships Manager",
    telegram: "@Gyydis",
    imgSrc: "",
  },
  {
    name: "Bruce Nguyen",
    email: "events@aaltoai.com",
    position: "Event Manager",
    telegram: "@quan_possible",
    imgSrc: "",
  },
  {
    email: "events@aaltoai.com",
    name: "Olaus Lintinen",
    position: "Event Manager",
    telegram: "@agaiactaest",
    imgSrc: Aga,
  },
  {
    email: "research-education@aaltoai.com",
    name: "Behram Ulukir",
    position: "Research & Education Manager",
    telegram: "@behramulukir",
    imgSrc: "",
  },
]

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: `"Oswald"`
    
  }
});



export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.transparent',
            pt: 8,
            pb: 6,
          }}
          height={'100vh'}
        >
          <Container maxWidth="sm">
            <Box style={{ justifyContent: "center", display: "flex" }}
 component={'img'} width={'100%'} src="aaiblack.png"></Box>
            <Typography fontFamily={'Oswald'} variant="h4" align="center" color="text.primary" paragraph>
              Artificial Intelligence Community for Coders, Researchers, Creators, and Artists of Aalto University.
            </Typography>
          </Container>
        </Box>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
          <Button style={{fontSize: 20}} variant="outlined" startIcon={<TelegramIcon style={{height: 50, width: 50}} />}>
            Join Our Telegram!
          </Button>
            </Stack>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            <Button style={{fontSize: 20}} variant="outlined" startIcon={<InstagramIcon style={{height: 50, width: 50}} />}>
              Follow On Instagram!
            </Button>
            <Button style={{fontSize: 20}} variant="outlined" startIcon={<LinkedInIcon style={{height: 50, width: 50}} />}>
              Follow On LinkedIn!
            </Button>
            </Stack>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {boardMembers.map((member) => (
              <Grid   container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center" item key={member.telegram} xs={12} sm={6} md={4}>
                <Avatar style={{width: '200px', height: '200px', marginBottom: 20}} alt="Olantius Lintinen" src={member.imgSrc} />
                <Typography fontFamily={'Oswald'} gutterBottom variant="h4" component="h2">
                  {member.name}
                </Typography>
                <Typography fontFamily={'Oswald'} gutterBottom variant="h6">
                  {member.position}
                </Typography>
                <Typography fontFamily={'Oswald'} gutterBottom variant="h6">
                  {member.email}
                </Typography>
                <Typography fontFamily={'Oswald'} gutterBottom variant="h6">
                  Telegram: {member.telegram}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}