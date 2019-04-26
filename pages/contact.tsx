import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const ContactPage = () => (
  <Layout title="Contact 👋">
    <h1>Contact</h1>
    <p>Say hi 👋</p>
    <form action="https://ftblgsendmail.azurewebsites.net/api/contact" method="POST">
      <fieldset> 
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required/>
      </fieldset>
      <fieldset>
        <label htmlFor="mail">Mail</label>
        <input type="email" name="mail" id="mail" required/>
      </fieldset>
      <fieldset>
        <label htmlFor="text">Message</label>
        <textarea name="text" id="text" rows={10} cols={30}></textarea>
      </fieldset>
      <button type="submit">Send it</button>
    </form>
    <p><Link href='/'><a>Go home</a></Link></p>
  </Layout>
)

export default ContactPage;
