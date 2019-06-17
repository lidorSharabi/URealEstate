import * as fromActions from '../actions/URealEstate.actions'
import { createSelector } from '@ngrx/store';

export interface State {
    isUserDialogOpen: boolean;
  };
  
  export const initialState: State = {
    isUserDialogOpen: false
  };

  export function reducer(state = initialState, action: fromActions.Actions): State {
    switch (action.type) {
      case fromActions.USER_DIALOG_CHANGE:{        
        const isOpen = action.payload;
        return{
            ...state,
            isUserDialogOpen: isOpen            
        };
      }

    //   case fromActions.USER_DIALOG_CLOSE:{
    //     const isOpen = action.payload;
    //     return{
    //         isUserDialogOpen: isOpen,
    //         ...state
    //     };
    //   }

      default: {        
        return state;
      }
    }
}

    export const getIsUserDialogOpen = (state: State) => state.isUserDialogOpen;

  