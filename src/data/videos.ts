import liberation from '../assets/liberation.png'
import mobile_liberation from '../assets/mobile liberation.png'

export type HomeVideos = {
    videoUrl:string;
    altImage?:string;
    name?:string;
    description?:string;
    notes?:string;
    styles:{
        width:string;
        height:string;
    }
    mobile:boolean;
};

export const homeVideos: HomeVideos[] = [

    // DESKTOP

    {
        videoUrl:'https://vimeo.com/1218770160',
        altImage:`${liberation}`,
        name:'Escaping Tyranny 2',
        description:'',
        notes:'desktop reel 2d book video',
        styles:{
            width:'394px',
            height:'700px'
        },
        mobile:false,
    },

    {
        videoUrl:'https://vimeo.com/1205169300',
        // videoUrl:'https://example.invalid/not-a-video',
        name:'AIT overview',
        notes:'displays as reel on mobile and desktop',
        styles:{
            width:'394px',
            height:'700px'
        },
        mobile:false,
    },

    //  MOBILE

    {
        videoUrl:'https://vimeo.com/1218748341',
        // videoUrl:'https://example.invalid/not-a-video',
        altImage:`${mobile_liberation}`,
        name:'Escaping Tyranny',
        notes:'2d video displays on mobile',
        styles:{
            width:'100%',
            height:'300px'
        },
        mobile:true,
    },

    {
        videoUrl:'https://vimeo.com/1205169300',
        name:'AIT overview',
        notes:'displays as reel on mobile and desktop',
        styles:{
            width:'100%',
            height:'700px'
        },
        mobile:true,
    }
];