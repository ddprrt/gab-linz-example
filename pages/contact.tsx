import React, { FC } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="Contact 👋">
    <h1>Contact</h1>
    <p>Say hi 👋</p>
    <form action="https://ftblgsendmail.azurewebsites.net/api/contact" method="POST">
      Name: <input type="text" name="name" id="name" required/>
      Mail: <input type="email" name="mail" id="mail" required/>
      Message: <textarea name="text" id="text">
        Be nice
      </textarea>
    </form>
    <p><Link href='/'><a>Go home</a></Link></p>
  </Layout>
)

export default AboutPage;
