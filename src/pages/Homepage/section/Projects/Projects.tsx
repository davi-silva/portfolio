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
}



const ProjectComponent: React.FC<Props> = ({url, image, position, name, description}) => {
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
            <Title>Online Business</Title>
            <ProjectComponent
              url="//crypticactivist.com"
              image={Crypticactivist}
              position="CEO"
              name="Cryptic Activist"
              description="An online platform for publishing blog posts and articles
              by the community, weekly podcast episode, and online courses primarily
              focused on blockchain development, blockchain real-life applcations,
              cypherpunk and libertarian topics."
            />
            <ProjectComponent
              url="//canadacannabyss.com"
              image={Canadacannabyss}
              position="CTO & Co-founder"
              name="Canada Cannabyss"
              description="An e-cigarettes e-Commerce for the North America market."
            />
            <ProjectComponent
              url="//canadaecigs.com"
              image={Canadaecigs}
              position="CTO & Co-founder"
              name="Canada E-Cigs"
              description="An weed products e-Commerce for the North America market."
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Projects
