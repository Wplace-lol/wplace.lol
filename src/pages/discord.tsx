import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';

export default function Discord(): React.ReactElement {
  useEffect(() => {
    window.location.href = 'https://discord.gg/Tbh6A2czJT';
  }, []);

  return <Redirect to="https://discord.gg/Tbh6A2czJT" />;
}
