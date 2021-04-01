import { Typography } from '@material-ui/core';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const developmentYear = 2021;
  const yearShown =
    currentYear === developmentYear
      ? developmentYear
      : `${developmentYear} - ${currentYear}`;
  return (
    <footer>
      <Typography variant={'overline'}>
        Developed by Matheus Garrido &copy; {yearShown}
      </Typography>
    </footer>
  );
};
