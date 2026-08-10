import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { Home } from './pages/Home.jsx'
import { Projects } from './pages/Projects.jsx'
import { ProjectDetail } from './pages/ProjectDetail.jsx'
import { Contact } from './pages/Contact.jsx'
import { flags } from './data/content.js'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {flags.showProjects ? (
          <>
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </>
        ) : (
          <Route path="/projects/*" element={<Navigate to="/" replace />} />
        )}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}
