import { StyledButton, StyledSections } from './Home.styles';
import { useDispatch } from 'react-redux';
import { selectors, actions } from '@store/WalletConnectSlice';

const Home = () => {
  const dispatch = useDispatch();

  const walletConnect = () => {
    dispatch(actions.walletConnectProvider());
  }

  return (
    <StyledSections>
      <StyledButton onClick={walletConnect}>
        WalletConnect
      </StyledButton>
    </StyledSections>
  );
};

export default Home;
