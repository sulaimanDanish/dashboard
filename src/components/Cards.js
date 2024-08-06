import { Component } from "react";
import styled from "styled-components";

const Card = styled.article`
  background-color:  #1d283c;
  border-radius: 15px;
  overflow: hidden;
  padding: 15px 15px;
  margin:0 3px;
  position: relative;
  height:100px;
  transition: 0.15s ease-in;
  
  &:hover, &:focus-within {
    box-shadow: 0 0 0 2px #fff;
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-weight: 600;
    font-size: 18px;
    padding-right:20px;
    text-decoration: none;
    color: #fff;
    will-change: transform;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }

  .number {
    font-weight: 600;
    font-size:20px;
    padding-right: 10px;
    text-decoration: none;
    color: #fff;
  }
`;

const CardFooter = styled.div`
  margin-top: 10px;
  border-top: 1px solid #ddd;
  padding-top: 5px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  &:first-child::after {
    display: block;
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: currentColor;
    margin-left: 12px;
    margin-right: 12px;
  }

  svg {
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    margin-right: 5px;
  }
`;
export default class Cards extends Component {

    render() {
        const {card} = this.props;
        return (
            <>
                <Card>
                    <CardHeader>
                        <a href="#">{card.name}</a>
                        <p className="number">{card.number}</p>
                    </CardHeader>
                    <CardFooter>
                        <CardMeta className="card-meta--views">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 3h12" />
                                <path d="M6 8h12" />
                                <path d="M10 3v12a4 4 0 0 0 4 4" />
                                <path d="M6 12h12" />
                            </svg>
                            {card.amount}
                        </CardMeta>
                        <CardMeta className="card-meta--date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="18" rx="4" />
                                <path d="M8 2v4" />
                                <path d="M16 2v4" />
                                <path d="M2 10h20" />
                            </svg>
                            {card.date}
                        </CardMeta>
                    </CardFooter>
                </Card>
            </>
        )
    }
}