import react, { useState } from 'react'
import { Page, Button, Text, Grid, Card, Spacer , Keyboard, Modal, useModal, useKeyboard, KeyCode } from '@geist-ui/core'
import Head from 'next/head'

export default function Container({children,title}){
   const { visible, setVisible, bindings } = useModal()
  useKeyboard(
    () => setVisible(true),
    [KeyCode.KEY_S]
	)
  return(
     <Page width="1000px">
       <Head>
	    <title>{title}</title>
	   </Head>
	   <div>{children}</div>
     </Page>
  )
}