import React from 'react';
import Link from 'next/link'

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Appbar.scss';

const Appbar = () => {

  return (
    <AppBar className='appbar' position='fixed'>
      <Container maxWidth="xl">
        <Toolbar disableGutters  className='appbar__toolbar'>
          <div className='appbar__nav'>
            <Link href="/" color="inherit">
              <Typography className='appbar__title'>
                <span className='appbar__title--highlight'>M</span>artin&apos;s Blog
              </Typography>
            </Link>
          </div>
          <div className='appbar__socials'>
            <Link href="https://www.linkedin.com/in/martin-chong-940715/" target="_blank" rel="noopener">
              <LinkedInIcon />
            </Link>
            <Link href="https://github.com/martinchong" target="_blank" rel="noopener">
              <GitHubIcon />
            </Link>
            <Link href="mailto:martinmanho@gmail.com" target="_blank" rel="noopener">
              <EmailIcon />
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Appbar;
