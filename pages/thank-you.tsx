import react, { useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { Page, Text, Link, Card, Image, Display, Button, Grid, Input, Spacer , Divider, } from '@geist-ui/core'
import { Search } from '@geist-ui/icons'
import Container from '../components/Container'

export default function ThankYou(){
  return(
    <Container title="Thank you for donating!">
	  <div className="head">
	  <Grid.Container gap={2} my="32px">
	     <h1 className="title float-left">Thank you for donating!
		 <NextLink href="/">
		   <Button type="success-light" scale={1.75}>← Back to home</Button>
		 </NextLink>
		 </h1>
      </Grid.Container>
	 </div>
	 <div className="m-head">
	   <Grid.Container>
	     <h1 className="title float-left">Thank you for donating!
		  <NextLink href="/">
		  <Button type="success-light" scale={1.5}>← Back to home</Button>
		  </NextLink>
		 </h1>
	   </Grid.Container>
	 </div>
	</Container>
	)
}