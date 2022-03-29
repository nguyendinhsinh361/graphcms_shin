import type { NextPage } from 'next'
import Head from 'next/head'
import { Key } from 'react'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'

const Home: NextPage = ({ posts }: any)  => {
  return (
    <div className="container px-10 mx-auto mb-8">
      <Head>
        <title>Anime Shin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12"> 
        <div className="col-span-1 lg:col-span-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {posts.map((post: { node: any; title: Key | null | undefined }) => (
              <div className="col-span-1 lg:col-span-6">
                <PostCard post={post.node} key={post.title}/>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget categories={undefined} slug={undefined} />
              <Categories />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
