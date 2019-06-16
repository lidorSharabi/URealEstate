import { State } from "../reducers/URealEstate.reducer";
import { createSelector, createFeatureSelector } from "@ngrx/store";

// const selectDialog = (state: State) =>state.isUserDialogOpen;
const getURealEstateState = createFeatureSelector<State>(
    "URealEstate"
  );

export const getIsUserDialogOpen = createSelector(
    getURealEstateState, 
    (state: State) => state.isUserDialogOpen
);