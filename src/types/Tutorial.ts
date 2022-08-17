export class Tutorial {
    id: number;
    title: string;
    description: string;
    published: boolean;

    constructor(id:number, title: string, description:string, published:false) {
        this.id= id;
        this.title = title;
        this.description = description;
        this.published= published;
      }
    }
    
    export default Tutorial;