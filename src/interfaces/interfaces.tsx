export default interface IJob {
  uID:number;
  company:string;
  isNew: boolean;
  isFeatured : boolean;
  position: string;
  role:string;
  level:string;
  postedTime:string;
  contract:string;
  location:string;
  lang:string[];
  tools:string[];
  
}