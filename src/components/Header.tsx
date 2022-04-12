import type { NextComponentType } from 'next'
import styled from 'styled-components'
import Image from 'next/image';
import {
  Apartment,
  LocationOn,
  Language,
  Instagram,
  LinkedIn,
  GitHub,
} from '@material-ui/icons';
import ExperienceBar from './ExperienceBar';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  padding: 32px 0;
  margin-bottom: 16px;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  div.description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-left: 8px;
    padding-top: 40px;

    strong {
      font-size: 28px;
      font-weight: 600;
    }
    span {
      font-size: 16px;
      font-weight: 300;
      color: #999;
      margin-top: 4px;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin-left: 64px;
    padding-top: 40px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      svg {
        color: #333;
        font-size: 22px;
      }

      span {
        color: #999;
        font-size: 16px;
        margin-top: 8px;
      }

      &+li {
        margin-left: 24px;
      }
    }
  }

  nav.flex-end {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    position: absolute;
    top: 0;
    right: 32px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      svg {
        color: ${({theme}) => theme.colors.background};
        font-size: 22px;
      }

      &+li {
        margin-left: 16px;
      }
    }
  }
`;
const IconContainer = styled.div`
  position: relative;
  height: 120px;
  width: 120px;
  border: 4px solid ${({theme}) => theme.colors.background};
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 110px;
  z-index: -1;

  background: ${({theme}) => theme.colors.primary};
`;

const Header: NextComponentType = () => {
  return (
    <HeaderContainer>
      <Profile>
        <IconContainer>
          <Image
            src="/icons/167623667_266046425611422_5680762361843013993_n.jpg"
            alt="Igor Jung"
            layout="fill"
            objectFit="cover"
          />
        </IconContainer>
        <div className='description'>
          <strong>Igor Jung</strong>
          <span>Web developer</span>
        </div>
        <nav>
          <li>
            <LocationOn />
            <span>Brazil</span>
          </li>
          <li>
            <Apartment />
            <span>Tokenlab</span>
          </li>
          <li>
            <Language />
            <span>PT/EN</span>
          </li>
        </nav>
        <nav className='flex-end'>
          <li>
            <a
              href="https://github.com/igorjung"
              target="blank"
            >
              <GitHub />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/igorjung0/"
              target="blank"
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/igor-c%C3%A1ssio-jung-silva-005880169/"
              target="blank"
            >
              <LinkedIn />
            </a>
          </li>
        </nav>
      </Profile>
      <ExperienceBar />
      <Background />
    </HeaderContainer>
  )
}

export default Header
