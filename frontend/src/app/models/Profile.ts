export class Profile {
    id: number;
    title:string;
    name:string;
    email:string;
    summary:string;
    skills:[
        {
            name:string,
            experience:string,
            main:boolean
        }
    ]

}