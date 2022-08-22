export class Tutorial {
    id: number;
    title: string;
    description: string;
    published: boolean;

    constructor(id:number,title: string, description: string) {
        this.id= id;
        this.title = title;
        this.description = description;
        this.published= false;
      }
    }
    
    export default Tutorial;