import type { NextPage } from 'next'
import Footer from '../components/footer'
import Header from '../components/header'
import Profile from '../components/profile'
import ProjectPreview from '../components/projectPreview'
import Layout from '../components/layout'
const Home: NextPage = () => {
  return (
    <Layout>
      <div className='text-slate-700 flex flex-col gap-6'>
        <Header />
        <Profile />
        <ProjectPreview />
        <Footer />
      </div>
    </Layout>
  )
}

export default Home
