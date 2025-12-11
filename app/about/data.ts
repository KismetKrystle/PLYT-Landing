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
            { type: 'image', src: "/assets/images/about/Stage1/20150515_182344.webp", alt: "Gallery Image 2015-05" },
            { type: 'image', src: "/assets/images/about/Stage1/20150526_190437.webp", alt: "Gallery Image 2015-05b" },
            { type: 'video', src: "/assets/images/about/Stage1/20150527_183536.mp4", alt: "Gallery Video 2015-05" },
            { type: 'image', src: "/assets/images/about/Stage1/20150611_103310.webp", alt: "Gallery Image 2015-06" },
            { type: 'image', src: "/assets/images/about/Stage1/20150710_150926.webp", alt: "Gallery Image 2015-07" },

            { type: 'image', src: "/assets/images/about/Stage1/20150720_145749.webp", alt: "Gallery Image 2015-07b" },
            { type: 'image', src: "/assets/images/about/Stage1/20150819_124418.webp", alt: "Gallery Image 2015-08" },

            { type: 'video', src: "/assets/images/about/Stage1/20150827_135645_2.mp4", alt: "Gallery Video 2015-08b" },
            { type: 'image', src: "/assets/images/about/Stage1/20150905_133156.webp", alt: "Gallery Image 2015-09" },
            { type: 'image', src: "/assets/images/about/Stage1/20150905_133444.webp", alt: "Gallery Image 2015-09b" },
            { type: 'video', src: "/assets/images/about/Stage1/Inshot_20151024_091721.mp4", alt: "Gallery Video 2015-10" },
            { type: 'image', src: "/assets/images/about/Stage1/20160203_154149.webp", alt: "Gallery Image 2016-02" },
            { type: 'image', src: "/assets/images/about/Stage1/InstaShot_20150517_145755.webp", alt: "Gallery Image 2015-05c" },
        ]
    },
    {
        title: "2015-2019",
        description: "Built the container for my first hydroponic tower, so it could grow with the proper likes and feel like furniture in my living room.",
        media: [
            { type: 'image', src: "/assets/images/about/Stage2/1-IMG_8399.webp", alt: "1 IMG 8399" },
            { type: 'image', src: "/assets/images/about/Stage2/2-IMG_8412.webp", alt: "2 IMG 8412" },

            { type: 'video', src: "/assets/images/about/Stage2/4-Mvi_8404.mp4", alt: "4 Mvi 8404" },
            { type: 'video', src: "/assets/images/about/Stage2/5-Mvi_8436.mp4", alt: "5 Mvi 8436" },
            { type: 'image', src: "/assets/images/about/Stage2/6-IMG_8749.webp", alt: "6 IMG 8749" },
            { type: 'image', src: "/assets/images/about/Stage2/7-IMG_8421.webp", alt: "7 IMG 8421" },
            { type: 'image', src: "/assets/images/about/Stage2/8-tower-full.jpg", alt: "8 tower full" },
            { type: 'image', src: "/assets/images/about/Stage2/9-tower-light.jpg", alt: "9 tower light" },
            { type: 'video', src: "/assets/images/about/Stage2/10-videooflivingroom.mp4", alt: "10 videooflivingroom" },
            { type: 'image', src: "/assets/images/about/Stage2/11-20170429_135134.webp", alt: "11 20170429 135134" },
            { type: 'image', src: "/assets/images/about/Stage2/12- 20170704_115632.webp", alt: "12  20170704 115632" },
            { type: 'image', src: "/assets/images/about/Stage2/13-IMG_20171220_124345_678.webp", alt: "13 IMG 20171220 124345 678" },
            { type: 'image', src: "/assets/images/about/Stage2/14-20171220_101411.webp", alt: "14 20171220 101411" },
            { type: 'image', src: "/assets/images/about/Stage2/15-IMG_9358.webp", alt: "15 IMG 9358" },
            { type: 'image', src: "/assets/images/about/Stage2/16-IMG_9752_7.webp", alt: "16 IMG 9752 7" },
            { type: 'image', src: "/assets/images/about/Stage2/17-IMG_9946_12-1.webp", alt: "17 IMG 9946 12 1" },
        ]
    },
    {
        title: "2017-2019",
        description: "Started the journey of defining the Plyant mission. This is where I operated my first vertical farm, it was a Frieght Farm located downtown Las Vegas, NV. More photos are coming.",
        media: [
            { type: 'video', src: "https://youtu.be/eGo7WgLByxA", alt: "Explaining the Freight Farm" },
            { type: 'image', src: "/assets/images/about/Stage3/20170128_140814.webp", alt: "Gallery Image 2017-01b" },
            { type: 'video', src: "/assets/images/about/Stage3/20170204_130900.mp4", alt: "Gallery Video 2017-02" },
            { type: 'image', src: "/assets/images/about/Stage3/20170712_141308.webp", alt: "Gallery Image 2017-07" },
            { type: 'image', src: "/assets/images/about/Stage3/20171029_211851.webp", alt: "Gallery Image 2017-10a" },
            { type: 'image', src: "/assets/images/about/Stage3/20171029_215012.webp", alt: "Gallery Image 2017-10b" },
            { type: 'video', src: "/assets/images/about/Stage3/20171128_185205.mp4", alt: "Gallery Video 2017-11" },
            { type: 'image', src: "/assets/images/about/Stage3/20171203_165044.webp", alt: "Gallery Image 2017-12a" },
            { type: 'image', src: "/assets/images/about/Stage3/20171204_181446.webp", alt: "Gallery Image 2017-12b" },
            { type: 'image', src: "/assets/images/about/Stage3/20171204_184414.webp", alt: "Gallery Image 2017-12c" },
            { type: 'image', src: "/assets/images/about/Stage3/20171204_191819.jpg", alt: "Gallery Image 2017-12d" },
            { type: 'video', src: "/assets/images/about/Stage3/20171205_162927.mp4", alt: "Gallery Video 2017-12e" },
            { type: 'video', src: "/assets/images/about/Stage3/20171205_164031.mp4", alt: "Gallery Video 2017-12g" },
            { type: 'image', src: "/assets/images/about/Stage3/20180204_173534.webp", alt: "Gallery Image 2018-02" },
            { type: 'image', src: "/assets/images/about/Stage3/91ECD43C-1.webp", alt: "Gallery Image 91ECD" },
            { type: 'image', src: "/assets/images/about/Stage3/IMG_01631.webp", alt: "Gallery Image 01631" },
            { type: 'image', src: "/assets/images/about/Stage3/IMG_20170721_174830_881.webp", alt: "Gallery Image 2017-07-21" },
            { type: 'image', src: "/assets/images/about/Stage3/IMG_20170809_200156_825.webp", alt: "Gallery Image 2017-08-09" },
            { type: 'image', src: "/assets/images/about/Stage3/IMG_20171029_215036_027.webp", alt: "Gallery Image 2017-10-29" },
            { type: 'image', src: "/assets/images/about/Stage3/IMG_20171115_010027_072.webp", alt: "Gallery Image 2017-11-15" },
            { type: 'image', src: "/assets/images/about/Stage3/IMG_20171204_191614_519.webp", alt: "Gallery Image 2017-12-04" },
            { type: 'image', src: "/assets/images/about/Stage3/IMG_20171226_190202_319.webp", alt: "Gallery Image 2017-12-26a" },
            { type: 'image', src: "/assets/images/about/Stage3/IMG_20171226_192910_650.webp", alt: "Gallery Image 2017-12-26b" },
            { type: 'image', src: "/assets/images/about/Stage3/IMG_20171229_193312_428.webp", alt: "Gallery Image 2017-12-29" },
            { type: 'image', src: "/assets/images/about/Stage3/Snapchat-2091590852.webp", alt: "Gallery Image Snapchat-209" },
        ]
    }, // ... (existing code for 2020-2025)
    {
        title: "2020-2025",
        description: "More updates to come.",
        media: []
    }
];
