import liberation from './assets/liberation.png'

export type HomeVideos = {
    vidioUrl:string;
    altImage?:string;
    name?:string;
    description?:string;
    notes?:string;
    width:string;
    height:string;
    mobile:boolean;
};

export const homeVideos: HomeVideos[] = [
    {
        vidioUrl:"https://vimeo.com/1218770160",
        altImage:"",
        name:"",
        description:"",
        notes:'',
        width:'',
        height:'',
        mobile:true,
    }
];