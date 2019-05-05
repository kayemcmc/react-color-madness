import React, { useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyButton = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
  outline: 0;
  background: rgba(255, 255, 255, 0.3);
  font-size: 0.9rem;
  line-height: 30px;
  color: white;
  text-transform: uppercase;
  border: none;
  opacity: 0;
  font-weight: 600;
  border-radius: 3px;
`;

const StyledDiv = styled.div`
  width: 20%;
  height: 25%;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  & > * {
    flex: 1 1 100%;
  }
  & :hover ${CopyButton} {
    opacity: 1;
    transition: 0.5s;
  }
`;

const CopyContainer = styled.div`
  text-align: center;
  padding: 30px 0;
`;

const BoxContent = styled.div``;

const AlignBottom = styled.div`
  grid-column: 1 / 2;
  grid-row: 2;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  color: black;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 12px;
`;

const SeeMore = styled(CopyButton)`
  opacity: 1;
  width: 70px;
  font-size: 12px;
`;

const CopyOverlay = styled.div`
  opacity: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  transform: scale(0.1);
  transition: transform 0.6s ease-in-out;
  &.show {
    opacity: 1;
    transform: scale(50);
    z-index: 10;
    position: absolute;
  }
`;

const CopyMessage = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 4rem;
  transform: scale(0.1);
  opacity: 0;
  color: white;
  & > p {
    font-weight: 400;
    text-shadow: 1px 2px black;
    background: rgba(255, 255, 255, 0.2);
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    padding: 10px;
  }
  & > span {
    font-size: 1.5rem;
    color: #fafafa;
  }
  &.show-message {
    opacity: 1;
    transform: scale(1);
    z-index: 20;
    transition: all 0.4s ease-in-out;
    transition-delay: 0.3s;
  }
`;

const ColorBox = ({ name, background }) => {
  const [copied, setCopied] = useState(false);
  const changeCopyState = () => {
    setCopied(true);
    const callbackCopied = () => {
      return setTimeout(() => setCopied(false), 1500);
    };
    callbackCopied();
  };
  console.log(copied);
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <StyledDiv style={{ background: background }}>
        <CopyContainer>
          <CopyButton>Copy</CopyButton>
        </CopyContainer>
        <AlignBottom>
          <BoxContent>
            <span>{name}</span>
          </BoxContent>
          <SeeMore>More</SeeMore>
        </AlignBottom>
        <CopyOverlay style={{ background: background }} className={copied && 'show'} />
        <CopyMessage className={copied && 'show-message'}>
          <p>Copied!</p>
          <span>{background}</span>
        </CopyMessage>
      </StyledDiv>
    </CopyToClipboard>
  );
};
export default ColorBox;
