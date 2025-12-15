export type MediaType = 'image' | 'video';

export interface MediaItem {
    type: MediaType;
    src: string;
    alt: string;
    thumbnail?: string;
}

export interface TimelineEvent {
    title: string;
    description: string;
    media: MediaItem[];
}

export const timelineData: TimelineEvent[] = [
    {
        title: "2011-2015",
        description: "After grad school I began my gardening journey. Starting with community farms, then my own backyard farm, to my first indoor hydroponic setup.",
        media: [
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765652346/myfirsttomatoes-2_pz2anb.mov", alt: "My first tomatoes video" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765652335/myfirsttomatoes_kdwfr5.jpg", alt: "My first tomatoes" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765652334/myfirsttomatoes-2_tjizs7.jpg", alt: "My first tomatoes 2" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765652335/1stlivingroomsetup-2_kqgrlj.jpg", alt: "First living room setup" },
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765803519/harvestingparsley_fijcfy.mp4", alt: "Harvesting parsley" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765652245/20150526_190437_leurit.webp", alt: "Timeline image 2015-05" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765652241/20150905_133444_uzcsy7.webp", alt: "Timeline image 2015-09" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765652241/20150905_kismetingarden.webp", alt: "Kismet in garden" },
        ]
    },
    {
        title: "2015-2019",
        description: "Built the container for my first hydroponic tower, so it could grow with the proper likes and feel like furniture in my living room.",
        media: [
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765658134/8-tower-full_liqlly.jpg", alt: "Tower full" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765658136/9-tower-light_huo6cd.jpg", alt: "Tower light" },
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765658062/3-SettingUpGrowContainer_gohalq.mp4", alt: "Setting up grow container" },
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765658170/5-Mvi_8436_ikllbh.mp4", alt: "Timeline video" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765658145/7-IMG_8421_fjlgyw.webp", alt: "Timeline image IMG_8421" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765658142/11-20170429_135134_pxcsvw.webp", alt: "Timeline image 2017-04" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765658143/12-_20170704_115632_qtikjd.webp", alt: "Timeline image 2017-07" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765658133/13-IMG_20171220_124345_678_w86zky.webp", alt: "Timeline image 2017-12" },
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765794247/livingrmgrowsystem2_kdxxdr.mp4", alt: "Living room grow system" },
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765794228/VID_30100612_062956_014_xtk1sm.mp4", alt: "Timeline video 2" },
        ]
    },
    {
        title: "2017-2019",
        description: "Started the journey of defining the Plyant mission. This is where I operated my first vertical farm, it was a Frieght Farm located downtown Las Vegas, NV. More photos are coming.",
        media: [
            { type: 'video', src: "https://youtu.be/eGo7WgLByxA", alt: "Explaining the Freight Farm" },
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765659363/Snapchat-1808830501_azkmx3.mp4", alt: "Snapchat video" },
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765659341/Vid_115320627_034431_303_brq4tm.mp4", alt: "Video 11532" },
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765659347/Snapchat-243994782_tzhqvs.mp4", alt: "Snapchat video 2" },
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765659349/Snapchat-630467865_cmw0fc.mp4", alt: "Snapchat video 3" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765659334/20171203_165044_a3fvrn.webp", alt: "Timeline image 2017-12" },
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765658364/20170204_130900_nt9wp7.mp4", alt: "Timeline video 2017-02" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765658353/IMG_20171229_193312_428_zsf8ri.webp", alt: "Timeline image 2017-12-29" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765658330/20170712_141308_ydbrus.webp", alt: "Timeline image 2017-07-12" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765658314/IMG_01631_mzv1h7.webp", alt: "Timeline image IMG_01631" },
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765815215/20171205_165314_ppi9oc.mp4", alt: "Timeline video 2017-12-05" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765815166/Screenshot_20171210-121646_nfqufx.jpg", alt: "Screenshot 2017-12-10" },
            { type: 'video', src: "https://res.cloudinary.com/dsoojlgg1/video/upload/v1765815780/20180123_192251_1-_isaiah_in_freightfarm2_ma3yv9.mp4", alt: "Isaiah in Freight Farm" },
            { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765815963/Snapchat-1048775573_k9hsaq.jpg", alt: "Snapchat image" },
        ]
    }, // ... (existing code for 2020-2025)
    {
        title: "2020-2025",
        description: "More updates to come.",
        media: []
    }
];
