import { AddClubScreen } from '../../screens/AddClubScreen';
import { ClubDetailScreen } from '../../screens/ClubDetailScreen';
import { ClubListScreen } from '../../screens/ClubListScreen';
import { MainNavigatorParamList, ScreenConfig } from './types';

export const mainNavigatorRoutes:Record<keyof MainNavigatorParamList,ScreenConfig> = {
    ClubListScreen:{
        component: ClubListScreen,
    },
    AddClubScreen:{
        component: AddClubScreen ,
    },
    ClubDetailScreen:{
        component:ClubDetailScreen,
    },
};
