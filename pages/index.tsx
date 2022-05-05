import react, { useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { Page, Text, Link, Card, Image, Display, Button, Grid, Input, Spacer , Divider, } from '@geist-ui/core'
import { Search } from '@geist-ui/icons'
import Container from '../components/Container'

const gh = 'https://github.com/geist-org/geist-ui'
const docs = 'https://geist-ui.dev'

export default function Home() {
  const redirect = (url: string) => window.open(url)

  return (
    <Container title="Home Page">
	 <div className="head">
	  <Grid.Container gap={2} my="32px">
       <Grid xs={12}><img className="hidden" src="/R-C-removebg-preview.png" /></Grid>
       <Grid xs={12}>
	     <h1 className="title float-left">Yeah Deutschland!
		 <Button type="success-light" scale={1.75}>Donate to Wilhelm II →</Button>
		 </h1>
	   </Grid>
      </Grid.Container>
	 </div>
	 <div className="m-head">
	   <Grid.Container>
	     <h1 className="title float-left">Yeah Deutschland!
		 <Button type="success-light" scale={1.5}>Donate to Wilhelm II →</Button>
		 </h1>
	   </Grid.Container>
	 </div>
    </Container>
  )
}