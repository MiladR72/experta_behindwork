import {UserProfileModel} from './user-profile.model';

export class UserDetailsModel{

 constructor(
   public id:number,
   public userId:number,
   public profile_id:number,
   public level:number,
   public username:string,
   public email:string,
   public expertises:any,
   public favourites:any,
   public profile:UserProfileModel,
 ){

 }
}
