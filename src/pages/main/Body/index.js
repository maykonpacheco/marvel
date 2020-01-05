import React from 'react';

import { Container } from './styles';

import { Comics } from '../../../components/comics';
import { Characters } from '../../../components/characters';
import { Creators } from '../../../components/creators';

export const BodyMain = () => {
    return (
    <Container>
        <Comics />
        <Characters />
        <Creators />
    </Container>
  );
}
