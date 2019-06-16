import * as fromURealEstate from './URealEstate.reducer';
import { ActionReducerMap } from 'node_modules/@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface SystemState {
    URealEstate: fromURealEstate.State;
  }
  
  export const reducers: ActionReducerMap<SystemState> = {
    URealEstate: fromURealEstate.reducer
  };

  export const getSystemState = createFeatureSelector<SystemState>('system');
  export const getURealEstateState = createSelector(getSystemState, (state: SystemState) => state.URealEstate);


  //all selectors
  export const getIsUserDialogOpen = createSelector(getURealEstateState, fromURealEstate.getIsUserDialogOpen);
//   export const getIsUserDialogOpen = createSelector(getURealEstateState, fromURealEstate.getIsUserDialogOpen);
//   export const getIsUserDialogOpen = createSelector(getURealEstateState, fromURealEstate.getIsUserDialogOpen);
//   export const getIsUserDialogOpen = createSelector(getURealEstateState, fromURealEstate.getIsUserDialogOpen);
  
    