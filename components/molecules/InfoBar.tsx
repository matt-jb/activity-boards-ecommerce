import Link from 'next/link'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  text-align: center;
  width: 100%;
  padding: 0.4rem 0;
  background-color: var(--lightBlue);
`

const StyledBar = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: var(--maxWidth);
  margin: 0 auto;
  font-family: 'Poppins', serif;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  
  > * {
    color: var(--white);
    text-decoration: none;
  }

  > a {
    transition: all ease-in-out .1s;
    border-bottom: 1px solid transparent;
    
    &:hover {
      color: var(--lightGrey);
      border-bottom: 1px solid var(--lightGrey);
    }
  }
`

export default function InfoBar() {
  return <StyledWrapper>
    <StyledBar>
      <Link href="/how-to-buy" className="infoText">Wysyłka i zwrot</Link>
      <div>Ręcznie wykonane tablice manipulacyjne</div>
      <Link href="/personalisation" className="infoText">Personalizacja</Link>
    </StyledBar>
  </StyledWrapper>
}
