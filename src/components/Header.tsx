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
import Trophies from './Trophies';

import UserInterface from '../interfaces/user'
import { userInfo } from 'os';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  max-width: 800px;
  padding: 40px 0;
  margin-bottom: 16px;
`;
const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
`;
const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 8px;
  padding-top: 40px;

  span {
    font-size: 16px;
    font-weight: 300;
    color: #999;
    margin-top: 4px;
  }
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin: 0 auto;
  padding-top: 40px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      color: #333;
      font-size: 22px;

      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
    }

    span {
      color: #999;
      font-size: 16px;
      margin-top: 8px;

      @media screen and (max-width: 767px) {
        font-size: 14px;
      }
    }

    &+li {
      margin-left: 24px;

      @media screen and (max-width: 767px) {
        margin-left: 14px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    margin: 0 0 0 auto;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const FloatList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  position: absolute;
  top: 16px;
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
`;
const CornerDiv = styled.div`
  padding-top: 40px;
  margin-left: auto;

  @media screen and (max-width: 767px) {
    display: none;
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

  @media screen and (max-width: 767px) {
    left: 0;
  }
`;

const Header: React.FC<{user: UserInterface}> = ({ user }) => {
  return (
    <HeaderContainer>
      <Profile>
        <IconContainer>
          <Image
            src={user.avatar_url}
            alt={user.name}
            priority
            layout="fill"
            objectFit="cover"
          />
        </IconContainer>
        <ProfileDescription>
          <h1>{user.name}</h1>
          <span>Web developer</span>
        </ProfileDescription>
        <Nav>
          <li>
            <LocationOn />
            <span>{user.location}</span>
          </li>
          <li>
            <Apartment />
            <span>{user.company}</span>
          </li>
          <li>
            <Language />
            <span>PT/EN</span>
          </li>
        </Nav>
        <FloatList>
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
        </FloatList>
        <CornerDiv>
          <Trophies />
        </CornerDiv>
      </Profile>
      <SubHeader>
        <ExperienceBar />
      </SubHeader>
      <Background />
    </HeaderContainer>
  )
}

export default Header
