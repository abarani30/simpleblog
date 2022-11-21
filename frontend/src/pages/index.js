//import styles from '../styles/Home.module.css'
import Layout from "../hoc/Layout"
import { useSelector } from "react-redux"
import { useRouter }  from "next/router"

const Home = () => {

  const router = useRouter()
  const { isAuthenticated } = useSelector(state => state.auth)

  if (typeof window !== "undefined" && !isAuthenticated) {
    router.push("/login")
  }

  if (typeof window !== "undefined" && isAuthenticated) {
    localStorage.setItem("page", "home")
  }

  return (
    <Layout title="Home page" content="This is the home page">
      <div className="container">
        <h4 className="py-3">What is Http Only Cookies?</h4>
        <section className="py-1">
            An <b>HttpOnly Cookie</b> is a tag added to a browser cookie that prevents 
          client-side scripts from accessing data. It provides a gate that prevents 
          the specialized cookie from being accessed by anything other than the server.  
          Using the HttpOnly tag when generating a cookie helps mitigate the risk of 
          client-side scripts accessing the protected cookie, thus making these cookies 
          more secure.
        </section>
      </div>

      <div className="container">
        <h4 className="py-3">What is Django REST Framework?</h4>
        <section className="py-1">
          <b>Django REST framework</b> is a powerful and flexible toolkit for building Web APIs.
          Some reasons you might want to use REST framework:

          <ol className="py-2">
            <li>The Web browsable API is a huge usability win for your developers.</li>
            <li>Authentication policies including packages for OAuth1a and OAuth2.</li>
            <li>Serialization that supports both ORM and non-ORM data sources.</li>
            <li>Customizable all the way down - just use regular function-based views if you don't need the more powerful features.</li>
            <li>Extensive documentation, and great community support.</li>
            <li>Used and trusted by internationally recognised companies including Mozilla, Red Hat, Heroku, and Eventbrite.</li>
          </ol>
          </section>
      </div>
    

    </Layout>
  )
}

export default Home