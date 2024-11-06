import { useRoute as _useRoute, RouteProp } from '@react-navigation/native';
import { MainNavigatorParamList } from '../navigation/MainNavigator/types';

export const useRoute = <RouteName extends keyof MainNavigatorParamList>(): RouteProp<
  MainNavigatorParamList,
  RouteName
> => {
  return _useRoute<RouteProp<MainNavigatorParamList, RouteName>>();
};
