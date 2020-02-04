import React from 'react'

import Hero from './section/Hero/Hero'
import Skills from './section/Skills/Skills'
import Projects from './section/Projects/Projects'
import Repos from './section/Repos/Repos'

const Homepage: React.FC = () => (
  <>
    <Hero />
    <Skills />
    <Projects />
    <Repos />
  </>
)

export default Homepage
