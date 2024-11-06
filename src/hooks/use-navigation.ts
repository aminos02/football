import {useNavigation as _useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainNavigatorParamList} from '../navigation/MainNavigator/types';

export function useNavigation() {
  return _useNavigation<NativeStackNavigationProp<MainNavigatorParamList>>();
}
