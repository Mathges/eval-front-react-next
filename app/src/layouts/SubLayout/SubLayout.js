import React, { useContext, useEffect, useState } from 'react';
import decodeToken from '@/utils/decodeToken';
import Navbar from '@/components/Navbar/Navbar';
import { useTranslation } from 'next-i18next';
import { UserContext } from '@/contexts/UserContext';

const SubLayout = ({ children }) => {
  const { t } = useTranslation('common');
  const [token, setToken] = useState({});
  const { userContext, setUserContext } = useContext(UserContext);

  const freelanceLinks = [
    {
      name: t('navbar.links.profile'),
      to: "/profile"
    },
    {
      name: t('navbar.links.home'),
      to: "/"
    },
    {
      name: t('navbar.links.tasks'),
      to: "/tasks"
    }
  ];

  const companyLinks = [
    {
      name: "Profile",
      to: "/profile"
    },
    {
      name: "Search a Freelance",
      to: "/search"
    },
    {
      name: "Proposals",
      to: "/"
    }
  ];

  useEffect(() => {
    try {
      const jwt = decodeToken();
      setToken(jwt);
      setUserContext({ ...userContext, jwt });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {
        token.userType === 'freelance' &&
        <>
          <Navbar links={freelanceLinks} />
          {children}
        </>
      }
      {
        token.userType === 'company' &&
        <>
          <Navbar links={companyLinks} />
          {children}
        </>
      }
    </>
  );
}

export default SubLayout;
