import { Component } from "react";

import styled from 'styled-components';

const Div = styled.div`
  background: #1d283c;
  padding: 15px 20px;
  border-radius: 15px;
  color: white;
`;

const UserDetails = styled.div`
  display: flex;
`;

const ImgBox = styled.div`
  margin-right: 1rem;
  margin-top: 1.5rem;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 2rem;
  border: 2px solid #cec5c5;
`;

const DetBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.p`
  color: hsl(0, 0%, 81%);
  font-size: 0.9rem;
  margin-bottom: 0.1rem;
  font-weight: 600;
`;

const Designation = styled.p`
  color: hsl(0, 0%, 81%);
  opacity: 50%;
  font-size: 0.8rem;
`;

const Review = styled.div`
  h4 {
    font-size: 16px;
    color: #f3deff;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }

  p {
    font-size:12px;
    color: #f3deff;
    font-weight: 500;
    opacity: 50%;
    line-height: 1.5;
  }
`;

export default class Feedback extends Component {
    render() {
        return (
            <>
                 <Div>
      <UserDetails>
        <ImgBox>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/236/236831.png"
            alt="Sushil Kumar"
          />
        </ImgBox>
        <DetBox>
          <Name>Sushil Kumar</Name>
          <Designation>Verified Customer</Designation>
        </DetBox>
      </UserDetails>
      <Review>
      <h4>Outstanding Customer Support and Personalized Service</h4>
<p>
  “ The sales team at this company genuinely cares about my needs and progress, which is incredibly refreshing. Their support and guidance have been invaluable in helping me navigate their products and services. I feel confident and well-equipped to make informed decisions thanks to their thorough assistance. The quality of their service is unmatched. You receive personalized attention from a community of knowledgeable and dedicated professionals. ”
</p>
      </Review>
    </Div>
            </>
        )
    }
}