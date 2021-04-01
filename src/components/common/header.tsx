import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';

interface headerProps {
  title: string;
}
export const Header = ({ title }: headerProps) => {
  return (
    <header>
      <AppBar position="static" id={'header'}>
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};
