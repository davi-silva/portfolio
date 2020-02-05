import React from 'react';

import {
  Wrapper,
  Title,
  CorpsDiv,
  CorpWrapper,
  CompanyImage,
  CompanyName,
  CompanyPosition,
} from './styles';

import Nerit from '../../../../assets/img/nerit.png'
import Nextly from '../../../../assets/img/nextly.jpeg'

const CorpHistory: React.FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title>Corporate Path</Title>
            <CorpsDiv>
              <CorpWrapper className="left">
                <CompanyImage src={Nerit} />
                <CompanyName>
                  Nerit
                </CompanyName>
                <CompanyPosition>
                  Frontend Engineer
                </CompanyPosition>
              </CorpWrapper>
              <CorpWrapper className="right">
                <CompanyImage src={Nextly} />
                <CompanyName>
                  Nextly
                </CompanyName>
                <CompanyPosition>
                  Business Strategist
                </CompanyPosition>
              </CorpWrapper>
            </CorpsDiv>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default CorpHistory;