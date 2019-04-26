import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="YEAH! ">
    <h1>Mail sent 💌</h1>
    <p>I'll get back to you shortly</p>
    <p><Link href='/'><a>Go home</a></Link></p>
  </Layout>
)

export default AboutPage;
