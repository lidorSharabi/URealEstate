import { Action } from '@ngrx/store';

export const USER_DIALOG_CHANGE =  '[URealEstate] User Dialog Change';
// export const USER_DIALOG_CLOSE = '[URealEstate] User Dialog Close';


export class UserDialogChange implements Action {
        readonly type = USER_DIALOG_CHANGE;
      
        constructor(public payload: boolean) { }
}

// export class UserDialogClose implements Action {
//         readonly type = USER_DIALOG_CLOSE;
      
//         constructor(public payload: boolean) { }
// }

export type Actions  = 
UserDialogChange
//   | UserDialogClose;