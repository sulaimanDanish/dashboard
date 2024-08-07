import { Component } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
 display:flex;
 flex-direction:row;
  background: #1d283c;
  padding: 15px 20px;
  border-radius: 15px;
  width:100%;
  height:auto;
`;

const ContainerCard = styled.div`
  color: white;
  width:100%;
  height:auto;
`;

const CardTitle = styled.p`
  font-weight: 600;
  color: white;
  letter-spacing: -0.02em;
  line-height: 20px;
  font-style: normal;
  font-size: 22px;
  padding-bottom: 8px;
`;

const chart = {
   display: "flex",
   alignItems:"center",
   justifyContent:"center",
    padding: "20px 20px",
    height: "auto",
    width: "100%"
}

const fadeInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const badgeRibbonLeftAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(-5px, -10px) rotate(75deg) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(0) rotate(0deg) scale(1);
  }
`;

const badgeRibbonRightAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(5px, -10px) rotate(-75deg) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(0) rotate(0deg) scale(1);
  }
`;

const BadgeSvg = styled.svg`
  display: block;
  position: relative;
`;

const BadgeRibbon = styled.path`
  opacity: 0;
  transform: translate(-5px, -10px) rotate(75deg) scale(0.5);
  transform-origin: center;
  animation: ${badgeRibbonLeftAnimation} 1s 0.5s ease forwards;
  will-change: transform, opacity;

  &.right {
    transform: translate(5px, -10px) rotate(-75deg) scale(0.5);
    animation: ${badgeRibbonRightAnimation} 1s 0.5s ease forwards;
  }
`;

const BadgeCircle = styled.circle`
  opacity: 0;
  animation: ${fadeInTop} 1.5s ease forwards;
`;

export default class Overview extends Component {
    render() {
        return (
            <>
                <Container>
                    <ContainerCard>
                        <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4547)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4547)" stroke-width="2"></rect>
                            <path d="M33.2182 61.4C33.2182 75.425 37.2682 86.75 51.5932 86.75C65.9182 86.75 69.8182 75.425 69.8182 61.4C69.8182 47.225 65.9182 35.9 51.5932 35.9C37.2682 35.9 33.2182 47.225 33.2182 61.4ZM43.7182 61.4C43.7182 53.075 45.5932 46.1 51.5932 46.1C57.5182 46.1 59.3182 53.075 59.3182 61.4C59.3182 69.65 57.5182 76.55 51.5932 76.55C45.5932 76.55 43.7182 69.65 43.7182 61.4Z" fill="#54E8A9"></path>
                            <path d="M87.7143 36.35L78.0543 56H80.1243L89.7843 36.35H87.7143ZM74.6943 40.16C74.6943 42.44 76.4043 44.15 78.6843 44.15C80.9343 44.15 82.7043 42.44 82.7043 40.16C82.7043 37.91 80.9343 36.14 78.6843 36.14C76.4043 36.14 74.6943 37.91 74.6943 40.16ZM77.1243 40.16C77.1243 39.29 77.7543 38.57 78.6843 38.57C79.5543 38.57 80.2743 39.29 80.2743 40.16C80.2743 41.09 79.5543 41.72 78.6843 41.72C77.7543 41.72 77.1243 41.09 77.1243 40.16ZM85.3143 52.31C85.3143 54.59 87.0243 56.3 89.3043 56.3C91.5543 56.3 93.3243 54.59 93.3243 52.31C93.3243 50.06 91.5543 48.29 89.3043 48.29C87.0243 48.29 85.3143 50.06 85.3143 52.31ZM87.7443 52.31C87.7443 51.44 88.3743 50.72 89.3043 50.72C90.1743 50.72 90.8943 51.44 90.8943 52.31C90.8943 53.24 90.1743 53.87 89.3043 53.87C88.3743 53.87 87.7443 53.24 87.7443 52.31Z" fill="#2FCB89"></path>
                            <defs>
                                <linearGradient id="paint0_linear_1366_4547" x1="0.0063367" y1="0.168432" x2="120.853" y2="119.009" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#2FCB89" stop-opacity="0.7"></stop>
                                    <stop offset="0.489583" stop-color="#2FCB89" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#2FCB89" stop-opacity="0.7"></stop>
                                </linearGradient>
                                <radialGradient id="paint1_radial_1366_4547" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
                                    <stop stop-color="#54E8A9"></stop>
                                    <stop offset="1" stop-color="#1A3E31" stop-opacity="0.2"></stop>
                                </radialGradient>
                            </defs>
                        </svg>
                        <CardTitle>Return Rate</CardTitle>

                    </ContainerCard>
                    <div style={chart}>
                        <BadgeSvg className="animated_badge_svg" width="75" height="100" viewBox="0 0 75 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <BadgeRibbon
                                d="M16 86.7506V62C16 59.2386 18.2386 57 21 57H55C57.7614 57 60 59.2386 60 62V86.8112C60 88.7561 58.8722 90.5246 57.1087 91.3448L40.5616 99.0411C39.2517 99.6504 37.7424 99.6633 36.4223 99.0766L18.9693 91.3197C17.1637 90.5172 16 88.7266 16 86.7506Z"
                                fill="#71A1F4"
                            />
                            <BadgeRibbon
                                d="M16 86.7506V62C16 59.2386 18.2386 57 21 57H55C57.7614 57 60 59.2386 60 62V86.8112C60 88.7561 58.8722 90.5246 57.1087 91.3448L40.5616 99.0411C39.2517 99.6504 37.7424 99.6633 36.4223 99.0766L18.9693 91.3197C17.1637 90.5172 16 88.7266 16 86.7506Z"
                                fill="#71A1F4"
                            />
                            <BadgeRibbon
                                d="M16 86.7506V62C16 59.2386 18.2386 57 21 57H55C57.7614 57 60 59.2386 60 62V86.8112C60 88.7561 58.8722 90.5246 57.1087 91.3448L40.5616 99.0411C39.2517 99.6504 37.7424 99.6633 36.4223 99.0766L18.9693 91.3197C17.1637 90.5172 16 88.7266 16 86.7506Z"
                                fill="url(#paint0_linear)"
                            />
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="16" y="57" width="44" height="43">
                                <BadgeRibbon
                                    d="M16 86.7506V62C16 59.2386 18.2386 57 21 57H55C57.7614 57 60 59.2386 60 62V86.8112C60 88.7561 58.8722 90.5246 57.1087 91.3448L40.5616 99.0411C39.2517 99.6504 37.7424 99.6633 36.4223 99.0766L18.9693 91.3197C17.1637 90.5172 16 88.7266 16 86.7506Z"
                                    fill="#71A1F4"
                                />
                                <BadgeRibbon
                                    d="M16 86.7506V62C16 59.2386 18.2386 57 21 57H55C57.7614 57 60 59.2386 60 62V86.8112C60 88.7561 58.8722 90.5246 57.1087 91.3448L40.5616 99.0411C39.2517 99.6504 37.7424 99.6633 36.4223 99.0766L18.9693 91.3197C17.1637 90.5172 16 88.7266 16 86.7506Z"
                                    fill="url(#paint1_linear)"
                                />
                            </mask>
                            <g mask="url(#mask0)">
                                <rect x="30" y="60" width="15" height="40" fill="#ABC7F9" />
                            </g>
                            <BadgeCircle className="badge_circle" cx="37.5" cy="37.5" r="33.5" fill="#71A1F4" stroke="#CEDCF5" stroke-width="8" />
                
                            <defs>
                                <linearGradient id="paint0_linear" x1="38" y1="57" x2="38" y2="89.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#27539F" />
                                    <stop offset="1" stop-color="#71A1F4" stop-opacity="0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="38" y1="57" x2="38" y2="89.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#27539F" />
                                    <stop offset="1" stop-color="#71A1F4" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </BadgeSvg>
                    </div>
                </Container>
            </>
        )
    }
}