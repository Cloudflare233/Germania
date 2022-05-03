import Head from 'next/head'
import { Page, Text, Image, Display, Button, Grid, Input, Card } from '@geist-ui/core'
import { Search } from '@geist-ui/icons'
import Container from '../components/Container'

const gh = 'https://github.com/geist-org/geist-ui'
const docs = 'https://geist-ui.dev'

export default function Home() {
  const redirect = (url: string) => window.open(url)

  return (
    <Container title="Home Page | cf233.ga">
	   <h1 className="title">Que será, será.</h1>
	   <h1 className="de">Whatever will be, will be.</h1>
    </Container>
  )
}
