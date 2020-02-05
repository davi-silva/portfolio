import React from 'react'

import Hero from './section/Hero/Hero'
import Skills from './section/Skills/Skills'
import Languages from './section/Languages/Languages'
import CorpHistory from './section/CorpHistory/CorpHistory'
import Projects from './section/Projects/Projects'
import Repos from './section/Repos/Repos'

const Homepage: React.FC = () => (
  <>
    <Hero />
    <Skills />
    <Languages />
    <Projects />
    <CorpHistory />
    <Repos />
  </>
)

export default Homepage
