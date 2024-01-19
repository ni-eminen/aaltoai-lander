import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
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
import Matias from "./mn.jpeg"
import Egor from "./egor.jpeg"
import Behram from "./behramulukir.png"
import Bruce from "./bruceki.jpeg"
import Smartbi from "./smartbi-logo.jpg"
import ResponsiveAppBar from './NavbarTop';

interface BoardMember {
  name: string;
  position: string;
  email: string;
  telegram: string;
  imgSrc: string;
}

interface Partner {
  name: string;
  position: string;
  imgSrc: string;
}

function Copyright() {
  return (
    <Typography variant="body2" color="common.white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://aaltoai.com/">
        www.aaltoai.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const partners: Partner[] = [
  {
    name: "Smartbi Oy",
    position: "default",
    imgSrc: Smartbi
  },
]

const boardMembers: BoardMember[] = [
  {
    email: "chairman@aaltoai.com",
    name: "Matias Nieminen",
    position: "Chairman",
    telegram: "@matoskni",
    imgSrc: Matias
  },
  {
    email: "research-education@aaltoai.com",
    name: "Behram Ulukir",
    position: "Research & Education Manager",
    telegram: "@behramulukir",
    imgSrc: Behram,
  },
  {
    email: "partnerships@aaltoai.com",
    name: "Egor Eremin",
    position: "Partnerships Manager",
    telegram: "@Gyydis",
    imgSrc: Egor,
  },
  {
    name: "Bruce Nguyen",
    email: "events@aaltoai.com",
    position: "Event Manager",
    telegram: "@quan_possible",
    imgSrc: Bruce,
  },
  {
    email: "events@aaltoai.com",
    name: "Olaus Lintinen",
    position: "Event Manager",
    telegram: "@agaiactaest",
    imgSrc: Aga,
  },
]

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      dark: '#FFFFFF',
      light: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      dark: '#FFFFFF',
      light: '#FFFFFF',
    }
  },
  typography: {
    fontFamily: `"Oswald"`
  }
});



export default function App() {
  const partnersRef = React.useRef<any>(null);
  const socialsRef = React.useRef<any>(null);
  const boardRef = React.useRef<any>(null);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main style={{ backgroundColor: "black" }}>
        <ResponsiveAppBar pages={[{ handle: 'Socials' }, { handle: 'Board' }, { handle: 'Partners' }]} ref={{ socialsRef, boardRef, partnersRef } as any} />
        <Box
          sx={{
            pt: 0,
            pb: 6,
          }}
          height={'100vh'}
        >
          <Container maxWidth="sm">
            <Box style={{ justifyContent: "center", display: "flex" }}
              component={'img'} width={'100%'} src="aaiblack.png"></Box>
            <Typography fontFamily={'Oswald'} variant="h3" align="center" color="common.white" paragraph>
              Artificial Intelligence Community for Coders, Researchers, and Builders of Finland.
            </Typography>
          </Container>
        </Box>
        <Box ref={socialsRef} style={{ marginBottom: 100 }}>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Link target="_blank" rel="noopener" href="https://t.me/+IX9h1s5hpysxMjE8" variant="body2">
              <Button style={{ fontSize: 20, width: '100%', margin: 5, color: 'white', borderColor: "white" }} variant="outlined" startIcon={<TelegramIcon style={{ height: 50, width: 50 }} />}>
                Join Our Telegram!
              </Button>
            </Link>
          </Stack>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Grid style={{ textAlign: "center" }}>
              <Link target="_blank" rel="noopener" href="https://www.instagram.com/aaltoaisociety/" variant="body2">
                <Button style={{ fontSize: 20, margin: 5, color: 'white', borderColor: "white" }} variant="outlined" startIcon={<InstagramIcon style={{ height: 50, width: 50 }} />}>
                  Follow On Instagram!
                </Button>
              </Link>
              <Link target="_blank" rel="noopener" href="https://www.linkedin.com/company/aaltoai/" variant="body2">
                <Button style={{ fontSize: 20, margin: 5, color: 'white', borderColor: "white" }} variant="outlined" startIcon={<LinkedInIcon style={{ height: 50, width: 50 }} />}>
                  Follow On LinkedIn!
                </Button>
              </Link>
            </Grid>
          </Stack>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Box
            sx={{
              pt: 8,
              pb: 6,
            }}
          >
            <Container ref={boardRef} id="board-members" maxWidth="sm">
              <Typography fontFamily={'Oswald'} variant="h3" align="center" color="common.white" paragraph>
                Board Members
              </Typography>
            </Container>
          </Box>
          <Grid container spacing={4} >
            {boardMembers.map((member) => (
              <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center" item key={member.telegram} xs={12} sm={6} md={4}>
                <Avatar style={{ width: '200px', height: '200px', marginBottom: 20 }} alt="Olaus Lintinen" src={member.imgSrc} />
                <Typography fontFamily={'Oswald'} color={"common.white"} gutterBottom variant="h4" component="h2">
                  {member.name}
                </Typography>
                <Typography fontFamily={'Oswald'} color={"common.white"} gutterBottom variant="h6">
                  {member.position}
                </Typography>
                <Typography fontFamily={'Oswald'} color={"common.white"} gutterBottom variant="h6">
                  {member.email}
                </Typography>
                <Typography fontFamily={'Oswald'} color={"common.white"} gutterBottom variant="h6">
                  Telegram: {member.telegram}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container ref={partnersRef} maxWidth="sm">
            <Typography fontFamily={'Oswald'} variant="h3" align="center" color="common.white" paragraph>
              In Collaboration With
            </Typography>
          </Container>
        </Box>
        <Grid alignItems="center" paddingBottom={30}
          justifyContent="center" container spacing={4} >
          {partners.map((partner) => (
            <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center" item key={partner.name} xs={12} sm={6} md={4}>
              <Avatar style={{ width: '200px', height: '200px', marginBottom: 20 }} alt={`${partner.name} logo`} src={partner.imgSrc} />
              <Typography fontFamily={'Oswald'} gutterBottom variant="h4" component="h2" color="common.white">
                {partner.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </main>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer" style={{ backgroundColor: "#111122" }}>
        <Typography variant="h6" align="center" gutterBottom color={"common.white"}>
          AaltoAI
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="common.white"
          component="p"
        >
          Accelerating Finnish Artificial Intelligence.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider >
  );
}