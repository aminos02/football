type ClubListScreenParams=undefined;
type AddClubScreenParams=undefined;
type ClubDetailScreenParams={
    clubId:number
};

export type MainNavigatorParamList={
    ClubListScreen:ClubListScreenParams;
    AddClubScreen:AddClubScreenParams;
    ClubDetailScreen:ClubDetailScreenParams;
}

export type ScreenConfig = {
    component: React.ComponentType;
  };
