import { Action } from '@ngrx/store';

export const USER_DIALOG_OPEN =  '[URealEstate] User Dialog Open';
// export const USER_DIALOG_CLOSE = '[URealEstate] User Dialog Close';


export class UserDialogOpen implements Action {
        readonly type = USER_DIALOG_OPEN;
      
        constructor(public payload: boolean) { }
}

// export class UserDialogClose implements Action {
//         readonly type = USER_DIALOG_CLOSE;
      
//         constructor(public payload: boolean) { }
// }

export type Actions  = 
    UserDialogOpen
//   | UserDialogClose;