import {keyframes} from 'styled-components'

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
	100% {
    transform: rotate(360deg);
	}
`;

export const floating = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;