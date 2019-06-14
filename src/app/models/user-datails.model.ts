export class UserDetails {
  constructor(
    public name?: string,
    public email?: string,
    public password?: string,
    public location?: string,
    public roomNum?: number,
    public price?: number,
    public types?: number[],
  ){}
}