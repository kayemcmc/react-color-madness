import React, { Component } from 'react';
import ColorBox from './colorbox';
import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100vh;
`;

const PaletteColors = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 90%;
`;

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => <ColorBox background={color.color} name={color.name} />);
    return (
      <StyledContainer>
        <PaletteColors>{colorBoxes}</PaletteColors>
      </StyledContainer>
    );
  }
}

export default Palette;
