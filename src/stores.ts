export type Store = {
  logo: string;
  link: string | null;
  name: string;
};

export const stores: Store[] = [

    {
        name:'amazon',
        logo:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        link:'https://www.amazon.com/Adrift-Tyranny-familys-voyage-across/dp/B0GB95YNBS/ref=sr_1_1?crid=3N5R1BERAGFJK&dib=eyJ2IjoiMSJ9.LRW7cSoeVsZu0xouU6pGyqYMk4Q7lUI-iJ8JaoENZDRn1HQpmMJ2RH7DkElTWNgqPoVe6GVUnuvw7z7pqmqnDL4AlyGFqUm5Voai_0LNGqdkddv4qTOw_Gans3zgneWtLXjT-bX08nKNw9A6J2wx3g.TRw6Upmsq8z_K-ZRfbzfQJBtrsCmuLn1lMDyf3D7xLY&dib_tag=se&keywords=adrift%2Bin%2Btyranny&qid=1785614907&sprefix=adrift%2Bin%2Btyranny%2Caps%2C202&sr=8-1'
    },

    {
        name:'B&N',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-pi.png',
        link:'https://www.barnesandnoble.com/w/adrift-in-tyranny-chris-demontigny/1150837173?ean=2940196659980'
    },

    {
        name:'kobo',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-kobo.png',
        link:'http://kobo.com/search?query=9798235446069'
    },

    {
        name:'apple',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-ibooks.png',
        link:'https://books.apple.com/us/book/adrift-in-tyranny/id6792550833'
    },

    {
        name:'everand',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-scribd.png',
        link:'https://www.everand.com/book/1063890936/Adrift-in-Tyranny'
    },

    {
        name:'tolino',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-tolino.png',
        link:'https://www.thalia.de/shop/home/artikeldetails/A1080976455'
    },

    {
        name:'overdrive',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-overdrive.png',
        link:'https://www.thalia.de/shop/home/artikeldetails/A1080976455'
    },

    {
        name:'vivlio',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-vivlio.png',
        link:'https://shop.vivlio.com/search?search=9798235446069'
    },

    {
        name:'Smashwords',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-smashwords.png',
        link:'https://www.smashwords.com/books/view/2069386'
    },

    {
        name:'Bookshop',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-bookshop.png',
        link:'https://bookshop.org/p/books/adrift-in-tyranny-chris-demontigny/4e64df0ed141e0bd?ean=9798235446069'
    },

    {
        name:'Fable',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-fable.png',
        link:'https://fable.co/book/x-9798235446069'
    },

    {
        name:'Gardners',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-gardners.png',
        link:null
    },

    {
        name:'Cloud library',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-bibliotheca.png ',
        link:null
    },

    {
        name:'Borrowbox',
        logo:'https://draft2digital-prod-static.s3.amazonaws.com/img/publishing-logo-borrowbox.png',
        link:null
    }
]