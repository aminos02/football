- to run project : `npx react-native start`
- unzip football.apk.zip to extract the apk then install it.
- project structure:

|App.tsx  
|src
├── components
│   ├── ClubItem.tsx
│   ├── Divider.tsx
│   ├── FormTextInput.tsx
│   └── PlayerItem.tsx  
├── constants
│   ├── clubs.ts  // dummy data for clubs to use them as initialState in clubSlice
│   └── players.ts // dummy data for players to use them as initialState in clubSlice
├── hooks
│   ├── use-navigation.ts // custom hook that wrap use-navigation to help us easy typing
│   └── use-route.ts // custom hook that wrap use-route to help us easy typing
├── navigation
│   └── MainNavigator
│       ├── index.tsx // map routes to screens
│       ├── routes.ts // here we are defining the routes 
│       └── types.ts  // here we are defining the type of routes params 
├── redux
│   ├── hooks
│   │   └── index.ts
│   ├── slices
│   │   ├── clubsSlice.ts  // slice to store and manage clubs
│   │   └── playersSlice.ts // slice for players
│   └── store.ts
├── screens
│   ├── AddClubScreen.tsx  // add the club using react-hook-form
│   ├── ClubDetailScreen.tsx // display club info and it's player on the current season
│   └── ClubListScreen.tsx // // display the list of clubs with flatlist to optimize the app
└── types
    └── index.ts  // define models : Club, Player, PlayerHistory and PlayerStats

 
