import React from 'react'

import {
  Wrapper,
  Title,
  LinkToProject,
  Div,
  Image,
  Position,
  ProjectName,
  ProjectDescription,
  TechUsed,
} from './styles'

import Crypticactivist from '../../../../assets/img/crypticactivist.gif'
import Canadaecigs from '../../../../assets/img/canadaecigs.gif'
import Canadacannabyss from '../../../../assets/img/canadacannabyss.gif'


interface Props{
  url: string,
  image: string,
  position: string,
  name: string,
  description: string,
  tech: string,
}



const ProjectComponent: React.FC<Props> = ({url, image, position, name, description, tech}) => {
  return (
    <LinkToProject to={url} target="_blank">
      <Div>
        <Image style={{
          backgroundImage: `url(${image})`,
        }}/>
      </Div>
      <Div style={{
        marginLeft: '15px',
      }}>
        <Position>
          {position}
        </Position>
        <ProjectName>
          {name}
        </ProjectName>
        <ProjectDescription>
          {description}
        </ProjectDescription>
        <TechUsed>
          {`${tech}`}
        </TechUsed>
      </Div>
    </LinkToProject>
  );
}

const Projects: React.FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title>Online Businesses</Title>
            <ProjectComponent
              url="//crypticactivist.com"
              image={Crypticactivist}
              position="CEO & Founder"
              name="Cryptic Activist"
              description="An online platform for publishing blog posts and articles
              by the community, weekly podcast episode, and online courses primarily
              focused on blockchain development, blockchain real-life applcations,
              cypherpunk and libertarian topics."
              tech="React.js, React Native, Redux, Redux Saga, Solidity, ERC-20, Python, C++, Node.js, Express.js MongoDB"
            />
            <ProjectComponent
              url="//canadacannabyss.com"
              image={Canadacannabyss}
              position="CTO & Co-founder"
              name="Canada Cannabyss"
              description="An e-cigarettes e-Commerce for the North America market."
              tech="Python, Django, TensorFlow, matplotlib, Postgres"
            />
            <ProjectComponent
              url="//canadaecigs.com"
              image={Canadaecigs}
              position="CTO & Co-founder"
              name="Canada E-Cigs"
              description="An weed products e-Commerce for the North America market."
              tech="Python, Django, TensorFlow, matplotlib, Postgres"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Projects
