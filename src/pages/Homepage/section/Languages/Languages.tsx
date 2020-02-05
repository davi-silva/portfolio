import React from 'react'

import {
  Wrapper,
  FlexWrapper,
  Title,
  SubTitle,
  LanguagesDiv,
  LanguageWrapper,
  Image,
  LanguageTitle,
} from './styles'

import JavaScript from '../../../../assets/img/js.png'
import TypeScript from '../../../../assets/img/ts.png'
import Node from '../../../../assets/img/node.png'
import ReactImg from '../../../../assets/img/react.png'
import Redux from '../../../../assets/img/redux.png'
import ReduxSaga from '../../../../assets/img/redux-saga.png'
import Python from '../../../../assets/img/python.png'
import Java from '../../../../assets/img/java.png'
import CPlusPlus from '../../../../assets/img/c++.png'
import Solidity from '../../../../assets/img/solidity.png'
import Ethereum from '../../../../assets/img/ethereum.png'
import HTML5 from '../../../../assets/img/html5.png'
import CSS3 from '../../../../assets/img/css3.png'

import AWS from '../../../../assets/img/aws.png'
import Heroku from '../../../../assets/img/heroku.png'
import Netlify from '../../../../assets/img/netlify.png'

const Languages: React.FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title>Technologies</Title>
            <SubTitle>
              Programming Languages
            </SubTitle>
            <FlexWrapper>
              <LanguagesDiv>
                <LanguageWrapper>
                  <Image src={JavaScript}/>
                  <LanguageTitle>
                    JavaScript
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={TypeScript}/>
                  <LanguageTitle>
                    TypeScript
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={Node}/>
                  <LanguageTitle>
                    Node.js
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={ReactImg}/>
                  <LanguageTitle>
                    React
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={Redux}/>
                  <LanguageTitle>
                    Redux
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={ReduxSaga}/>
                  <LanguageTitle>
                    Redux Saga
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={Python}/>
                  <LanguageTitle>
                    Python
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={Java}/>
                  <LanguageTitle>
                    Java
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={CPlusPlus}/>
                  <LanguageTitle>
                    C/C++
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={Solidity}/>
                  <LanguageTitle>
                    Solidity
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={Ethereum}/>
                  <LanguageTitle>
                    ERC20
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={HTML5}/>
                  <LanguageTitle>
                    HTML5
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={CSS3}/>
                  <LanguageTitle>
                    CSS3/SASS
                  </LanguageTitle>
                </LanguageWrapper>
              </LanguagesDiv>
              <SubTitle>
                Web Services
              </SubTitle>
              <LanguagesDiv>
                <LanguageWrapper>
                  <Image src={AWS}/>
                  <LanguageTitle>
                    AWS
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={Heroku}/>
                  <LanguageTitle>
                    Heroku
                  </LanguageTitle>
                </LanguageWrapper>
                <LanguageWrapper>
                  <Image src={Netlify}/>
                  <LanguageTitle>
                    Netlify
                  </LanguageTitle>
                </LanguageWrapper>
              </LanguagesDiv>
            </FlexWrapper>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Languages
