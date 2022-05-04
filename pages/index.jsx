import react, { useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { Page, Text, Link, Card, Image, Display, Button, Grid, Input, Spacer , Divider, } from '@geist-ui/core'
import { Search } from '@geist-ui/icons'
import Container from '../components/Container'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getAllPosts } from "../utils/mdxUtils";
import { InferGetStaticPropsType } from 'next';
import { GetStaticProps } from "next";

const gh = 'https://github.com/geist-org/geist-ui'
const docs = 'https://geist-ui.dev'

export default function Home({ posts }) {
  const redirect = (url: string) => window.open(url)
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container title="Home Page">
	   <div>
	     <Text sm></Text>
	   </div>
	   <h1 className="title">Cloudflare233</h1>
	   <Input icon={<Search size={48} />} onChange={(e) => setSearchValue(e.target.value)} className="fade-normal" scale={1.5} width="100%" placeholder="Search articles..." />
	   <Spacer y={8} />
	   {filteredBlogPosts.map((post) => (
	   <div className="">
		<Card padding="24px" className="fade-normal">
		   <h1 className="de">{post.title}</h1>
		 <Text p scale={1.5}>{post.description}</Text>
		 <Spacer y={6} />
		 <NextLink href={`/posts/${post.slug}`}>
		   <Button width="100%" scale={1.5}>Read More</Button>
		 </NextLink>
		</Card>
		<Spacer y={24} />
	   </div>
	  ))}
	  {!filteredBlogPosts.length && (
          <p className="my-4 text-gray-600 dark:text-gray-400">
            No results matched.
          </p>
        )}
		<Spacer y={24} />
	   <Divider className="fade-normal"/>
	   Still building...
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    "slug",
    "date",
    "thumbnail",
    "title",
    "description",
	"tag",
	"edit",
	"date",
	"image",
  ]);

  return { props: { posts } };
};