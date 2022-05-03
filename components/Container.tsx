import react, { useState } from 'react'
import { Page } from '@geist-ui/core'
import Head from 'next/head'

export default function Container({children,title}){
  return(
     <Page width="1000px" padding="32px">
       <Head>
	    <title>{title}</title>
	   </Head>
	   <div>{children}</div>
     </Page>
  )
}