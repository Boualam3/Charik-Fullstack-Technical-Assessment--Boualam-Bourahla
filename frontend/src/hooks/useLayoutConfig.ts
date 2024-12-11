import { ConfigContext } from '../contexts/LayoutConfigContext';
import { useContext } from 'react';

// ==============================|| CONFIG - HOOKS  ||============================== //

const useLayoutConfig = () => useContext(ConfigContext);

export default useLayoutConfig;
