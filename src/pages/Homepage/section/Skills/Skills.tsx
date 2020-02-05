import React from 'react'

import {
  Wrapper,
  Title,
  SkillsDiv,
  SkillWrapper,
  Image,
  SkillTitle,
} from './styles';

import MERN from '../../../../assets/img/mern.png'
import Blockchain from '../../../../assets/img/blockchain.png'
import eCommerce from '../../../../assets/img/ecommerce.png'
import Business from '../../../../assets/img/business.png'
import Investing from '../../../../assets/img/investing.png'

const Skills = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title>
              Main Skills
            </Title>
            <SkillsDiv>
              <SkillWrapper className="left">
                <Image src={MERN}/>
                <SkillTitle>
                  MERN Stack
                </SkillTitle>
              </SkillWrapper>
              <SkillWrapper className="centerLeft">
                <Image src={Blockchain}/>
                <SkillTitle>
                  Blockchain Development
                </SkillTitle>
              </SkillWrapper>
              <SkillWrapper className="center">
                <Image src={eCommerce}/>
                <SkillTitle>
                  eCommerce
                </SkillTitle>
              </SkillWrapper>
              <SkillWrapper className="centerRight">
                <Image src={Business}/>
                <SkillTitle>
                  Business Growth Strategy
                </SkillTitle>
              </SkillWrapper>
              <SkillWrapper className="right">
                <Image src={Investing}/>
                <SkillTitle>
                  Stocks and Crypto Investing
                </SkillTitle>
              </SkillWrapper>
            </SkillsDiv>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Skills
