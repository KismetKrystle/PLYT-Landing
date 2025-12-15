import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import Image from 'next/image';
import { timelineData } from '@/app/about/data';

const FounderTimeline = () => {
    const [activeStage, setActiveStage] = useState(0);
    const [currentMediaIndex, setCurrentMediaIndex] = useState<{ [key: number]: number }>({});
    const [hoveredStage, setHoveredStage] = useState<{ [key: number]: boolean }>({});
    const [expandedStages, setExpandedStages] = useState<{ [key: number]: boolean }>({});

    // Lightbox State
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxMedia, setLightboxMedia] = useState<any[]>([]);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Map existing data to new stages
    const stage1Media = timelineData[0]?.media || [];
    const stage2Media = timelineData[1]?.media || [];
    const stage3Media = timelineData[2]?.media || [];

    const stages = [
        {
            year: "2010",
            title: "The Discovery",
            content: "While studying architecture at UNLV, I encountered vertical farming for the first time, a skyscraper concept from Columbia University that promised to revolutionize urban food production. It reignited my belief in architecture's potential to solve real problems. But the more I studied, the more I saw the limitations: astronomical costs, massive energy demands, impractical scale. The idea was visionary, but inaccessible. I began asking: what if we thought smaller and smarter?",
            coverImage: { color: 'from-brand-dark to-brand-earth/20', label: 'Hover to explore gallery' },
            media: []
        },
        {
            year: "2011",
            title: "Rethinking Scale",
            content: "My thesis became a challenge to the vertical farm model. Instead of one massive structure feeding an entire city, I proposed distributed grow rooms integrated into existing buildings, apartments, offices, and community centers. My 150,000 sq ft mixed-use urban farm near Las Vegas's Symphony Park concept proved the architectural potential, but the real revelation was what didn't exist: modular, accessible hydroponic systems that anyone could use and any architect could design into their buildings. The gap between vision and reality became my roadmap forward.",
            coverImage: { color: 'from-brand-dark to-sage-green/30', label: 'Hover to explore gallery', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765799541/myThesisProject_qwphgd.png" },
            media: [
                { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765799541/myThesisProject_qwphgd.png", alt: "Thesis Project" },
                { type: 'image', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765799633/Final_FlexFarm_zpcnkl.jpg", alt: "Final FlexFarm" }
            ]
        },
        {
            year: "2012-2015",
            title: "Learning to Grow",
            content: "I couldn't design systems without understanding what plants actually need. I volunteered with a local master gardener, maintaining community farms and backyard gardens, and quickly saw why outdoor growing fails urban residents: weather damage, theft, labor demands, unpredictable yields. I brought a Tower Garden indoors and turned my living room into a testing lab, experimenting with hydroponics methods, lighting systems, and pollination techniques. I grew herbs, fruiting plants, even root vegetables from seed to harvest, documenting what works at residential scale. This wasn't just research, it was building the foundational knowledge to design systems people would actually use.",
            coverImage: { color: 'from-brand-dark to-soft-teal/30', label: 'Hover to explore gallery', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765652335/1stlivingroomsetup-2_kqgrlj.jpg" },
            media: stage1Media
        },
        {
            year: "2015-2019",
            title: "Design Meets Reality",
            content: "I moved and built a custom container box for my Tower Garden, something that looked like furniture, not lab equipment. I added T8 lights, retractable blinds to control light exposure, and made the system more mobile and accessible for maintenance. It worked beautifully, but the real lesson was sobering: I was willing to do the work for research, but most people wouldn't have the time or knowledge. True adoption would require on-call maintenance services and ready-to-transplant seedlings for faster results. I also discovered design flaws in existing systems, cleaning was difficult, refilling was awkward, and root diseases could spread between plants. The silver lining? Every visitor wanted one for their home, and I always sent friends away with fresh herbs and greens. The demand was real; the solution wasn't ready yet.",
            coverImage: { color: 'from-brand-dark to-sage-green/40', label: 'Hover to explore gallery', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765786414/kismetwFirstGrowSystem_neqbqp.jpg" },
            media: stage2Media
        },
        {
            year: "2017-2019",
            title: "Commercial Scale Reality",
            content: "I was offered the chance to operate an abandoned Freight Farm in downtown Las Vegas, a 40-foot shipping container with 256 vertical towers capable of growing 4,500 plants. As a solo operator, I managed 1,000+ plants across 33 varieties, supplying kale, basil, and peppers to two restaurants less than a mile away. The chefs raved about the quality, produce with superior flavor and shelf life that lasted days longer than conventional suppliers. I programmed the automated systems, optimized nutrient balancing for mixed crops, improved pest management, and developed production schedules to guarantee weekly harvests. When dialed in, the system required minimal oversight, just weekly check-ins via mobile app. But one weekend away exposed the fatal flaw: a burned pump left plants without water for 24 hours, and I lost half my crops. Unlike soil's forgiveness, hydroponic systems are critically dependent on electricity and functioning equipment. This vulnerability became my obsession. I had proven hyperlocal commercial farming worked, but the technology was too fragile and technical for widespread adoption. The design challenge became clear: create systems resilient enough for everyday users, regardless of technical skill or perfect conditions.",
            coverImage: { color: 'from-brand-dark to-brand-earth/30', label: 'Hover to explore gallery', src: "https://res.cloudinary.com/dsoojlgg1/image/upload/v1765658341/IMG_20170809_200156_825_gmp6w6.webp" },
            media: stage3Media
        },
        {
            year: "2020-2022",
            title: "Design Evolution",
            content: "I handed the Freight Farm to a local charity and left to explore Southeast Asia, seeking manufacturing opportunities and finishing a poetry book. I landed in Bali on March 1, 2020, and COVID shut the borders. Stranded without a garden but armed with years of research, I doubled down on design. I developed systems with strict parameters: off-grid capable, easy to clean, modular, and addressing the root management vulnerabilities I'd witnessed. Using only materials available on the island, a plastic tool drawer, recycled containers, absorbent cloth, and various growing mediums, I built a passive hydroponic prototype. No pumps, no artificial lights, just capillary action and sunlight. I grew tomatoes, eggplants, parsley, and peppers, refilling reservoirs weekly with two liters of nutrient water. It worked. Then I 3D-printed a tier to prove local manufacturing viability and discovered Bali's recycled plastic manufacturers, sheets and panels made from island-collected waste. The vision crystallized: locally produced, sustainably manufactured systems that could be customized by local artisans.",
            coverImage: { color: 'from-brand-dark to-soft-teal/40', label: 'Hover to explore gallery' },
            media: []
        },
        {
            year: "2023-Current",
            title: "Building the Ecosystem",
            content: "The hardware solved one problem, but widespread adoption required infrastructure. During isolation, I discovered Web3 and taught myself to code, realizing blockchain could coordinate the missing pieces: service networks, seedling distribution, and maintenance support. Individual grow systems aren't enough, people need an ecosystem that eliminates barriers to fresh food. I began developing the business model this site introduces: distributed grow systems (including existing market products that can be integrated and optimized) supported by AI-powered tools that help users find food sources and grow successfully. Local artisans customize units, recycled materials reduce waste, and a service network ensures no one waits for fresh food. The vision is clear: AI-powered local food networks, and sustainable, locally sourced systems backed by technology that makes urban farming accessible to everyone.",
            coverImage: { color: 'from-brand-dark to-sage-green/50', label: 'Hover to explore gallery' },
            media: []
        }
    ];

    useEffect(() => {
        const initialIndex: { [key: number]: number } = {};
        stages.forEach((_, index) => {
            initialIndex[index] = 0;
        });
        setCurrentMediaIndex(initialIndex);
    }, []);

    useEffect(() => {
        const observers = stageRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveStage(index);
                    }
                },
                { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
            );
            if (ref) observer.observe(ref);
            return observer;
        });

        return () => observers.forEach(obs => obs.disconnect());
    }, []);

    const nextMedia = (stageIndex: number) => {
        setCurrentMediaIndex(prev => ({
            ...prev,
            [stageIndex]: (prev[stageIndex] + 1) % (stages[stageIndex].media.length || 1)
        }));
    };

    const prevMedia = (stageIndex: number) => {
        setCurrentMediaIndex(prev => ({
            ...prev,
            [stageIndex]: prev[stageIndex] === 0
                ? (stages[stageIndex].media.length || 1) - 1
                : prev[stageIndex] - 1
        }));
    };

    const toggleExpand = (index: number) => {
        setExpandedStages(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Lightbox Handlers
    const openLightbox = (media: any[], index: number) => {
        setLightboxMedia(media);
        setLightboxIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'unset';
    };

    const nextLightboxMedia = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxIndex(prev => (prev + 1) % lightboxMedia.length);
    };

    const prevLightboxMedia = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxIndex(prev => prev === 0 ? lightboxMedia.length - 1 : prev - 1);
    };

    const scrollToStage = (index: number) => {
        const el = stageRefs.current[index];
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 120; // Offset for sticky headers
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-brand-dark text-brand-light font-sans relative overflow-hidden pt-24">
            {/* Background Ambient Glow */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-green/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-earth/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative z-20 border-b border-white/5 bg-brand-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24">
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                        <div className="w-full md:w-1/2 flex-shrink-0">
                            <h1 className="text-6xl sm:text-7xl md:text-8xl font-display text-brand-light leading-[0.85] tracking-tighter uppercase break-words">
                                From<br />Architecture<br />to Agriculture
                            </h1>

                            {/* Header Images */}
                            <div className="flex gap-4 sm:gap-6 mt-12">
                                {/* Static Image */}
                                <div className="relative w-1/2 aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group">
                                    <Image
                                        src="https://res.cloudinary.com/dsoojlgg1/image/upload/v1765783633/Kismet_head_shot_wprdoh.jpg"
                                        alt="Early experiments"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-white text-sm font-medium">Early Experiments</span>
                                    </div>
                                </div>

                                {/* Jump Link Image */}
                                <div
                                    className="relative w-1/2 aspect-[4/3] rounded-lg overflow-hidden border border-white/10 cursor-pointer group"
                                    onClick={() => scrollToStage(3)}
                                >
                                    <Image
                                        src="https://res.cloudinary.com/dsoojlgg1/image/upload/v1765786414/kismetwFirstGrowSystem_neqbqp.jpg"
                                        alt="Jump to 2015-2019"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

                                    {/* Button Overlay */}
                                    <div className="absolute bottom-4 right-4 bg-sage-green text-brand-dark px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1">
                                        Jump to 2015 <ChevronRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pt-1">
                            <p className="text-brand-light/90 text-xl md:text-2xl leading-relaxed font-serif mb-8">
                                Over the past decade, I've built expertise at the intersection of design and urban farming, not through theory alone, but by growing food in my living room, operating commercial vertical farms, and iterating through countless system designs. What started as architectural curiosity became a mission to make fresh, local food accessible to everyone. This timeline documents the hands-on research, hard-won lessons, and design evolution that led to Plyant. Each stage represents real experiments, actual crops grown, and insights that can only come from getting your hands dirty, both in planting and in code.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 relative z-10">
                <div className="relative">
                    {/* Vertical line - Desktop only */}
                    <div className="hidden md:block absolute left-24 top-0 bottom-0 w-0.5 bg-sage-green/20" />

                    {stages.map((stage, stageIndex) => {
                        const currentIndex = currentMediaIndex[stageIndex] || 0;
                        const currentMedia = stage.media[currentIndex];
                        const isHovered = hoveredStage[stageIndex];
                        // Safe access for media item properties since we're mixing types
                        // @ts-ignore
                        const mediaSrc = currentMedia?.src;
                        // @ts-ignore
                        const mediaType = currentMedia?.type;
                        // @ts-ignore
                        const mediaColor = currentMedia?.color;
                        // @ts-ignore
                        const mediaLabel = currentMedia?.label || currentMedia?.alt;

                        const hasMedia = stage.media && stage.media.length > 0;
                        const isExpanded = expandedStages[stageIndex];
                        const shouldTruncate = stage.content.length > 250;
                        const displayContent = shouldTruncate && !isExpanded
                            ? `${stage.content.slice(0, 250)}...`
                            : stage.content;

                        return (
                            <div
                                key={stageIndex}
                                ref={el => { stageRefs.current[stageIndex] = el }}
                                className="relative mb-16 sm:mb-32 last:mb-0"
                            >
                                {/* Year marker - Desktop only */}
                                <div className="hidden md:flex absolute left-0 items-start w-20 justify-end pt-1">
                                    <div className={`text-4xl font-bold transition-all duration-500 font-display text-right leading-tight ${activeStage === stageIndex ? 'text-sage-green scale-110' : 'text-brand-light/20'
                                        }`}>
                                        {stage.year.split('-').map((part, i) => (
                                            <span key={i} className="block">
                                                {i > 0 && '-'} {part}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={`absolute -right-6 top-4 w-4 h-4 rounded-full transition-all duration-500 ${activeStage === stageIndex ? 'bg-sage-green scale-150 shadow-[0_0_15px_rgba(127,176,105,0.5)]' : 'bg-brand-light/20'
                                        }`} />
                                </div>

                                {/* Year marker - Mobile (appears above content) */}
                                <div className="md:hidden mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`text-4xl font-bold transition-all duration-500 font-display ${activeStage === stageIndex ? 'text-sage-green' : 'text-brand-light/40'
                                            }`}>
                                            {stage.year}
                                        </div>
                                        <div className={`w-3 h-3 rounded-full transition-all duration-500 ${activeStage === stageIndex ? 'bg-sage-green' : 'bg-brand-light/20'
                                            }`} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`md:ml-40 grid gap-6 sm:gap-12 items-start ${hasMedia ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-4xl'}`}>
                                    {/* Text */}
                                    <div className={`transition-all duration-700 ${activeStage === stageIndex
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-40 translate-x-8'
                                        }`}>
                                        <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-brand-light font-display uppercase tracking-tight">
                                            {stage.title}
                                        </h2>
                                        <div className="text-brand-light/80 text-base sm:text-lg leading-relaxed font-sans">
                                            {displayContent}
                                            {shouldTruncate && (
                                                <button
                                                    onClick={() => toggleExpand(stageIndex)}
                                                    className="ml-2 text-sage-green hover:text-soft-teal font-medium transition-colors cursor-pointer"
                                                >
                                                    {isExpanded ? 'Read Less' : 'Read More'}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Media Carousel - Conditionally Rendered */}
                                    {hasMedia && (
                                        <div className={`transition-all duration-700 ${activeStage === stageIndex
                                            ? 'opacity-100 translate-x-0'
                                            : 'opacity-40 -translate-x-8'
                                            }`}>
                                            <div
                                                className="relative group rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10"
                                                onMouseEnter={() => setHoveredStage(prev => ({ ...prev, [stageIndex]: true }))}
                                                onMouseLeave={() => setHoveredStage(prev => ({ ...prev, [stageIndex]: false }))}
                                            >
                                                {/* Main media display */}
                                                <div className="relative aspect-video">
                                                    {/* 1. Cover View (Default) */}
                                                    <div className={`absolute inset-0 transition-opacity duration-500 z-10 ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
                                                        }`}>
                                                        {/* Optional Cover Image */}
                                                        {/* @ts-ignore */}
                                                        {stage.coverImage.src && (
                                                            <Image
                                                                // @ts-ignore
                                                                src={stage.coverImage.src}
                                                                alt={stage.title}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        )}

                                                        <div className={`absolute inset-0 ${
                                                            // @ts-ignore
                                                            stage.coverImage.src
                                                                ? 'bg-black/60'
                                                                : `bg-gradient-to-br ${stage.coverImage.color}`
                                                            }`}
                                                        >
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <div className="text-center p-8">
                                                                    {/* Icon removed */}
                                                                    <p className="text-brand-light/90 text-lg font-medium mb-1 font-display">
                                                                        {stage.year}
                                                                    </p>
                                                                    <p className="text-sage-green text-sm uppercase tracking-wider">
                                                                        {stage.coverImage.label}
                                                                    </p>
                                                                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-brand-light/60">
                                                                        <span>{stage.media.length} items</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* 2. Media View (Hover) */}
                                                    <div
                                                        className={`absolute inset-0 transition-opacity duration-500 cursor-pointer ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                                        onClick={() => openLightbox(stage.media, currentIndex)}
                                                    >
                                                        {mediaSrc && mediaType === 'image' ? (
                                                            <Image
                                                                src={mediaSrc}
                                                                alt={mediaLabel || "Timeline image"}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        ) : mediaSrc && mediaType === 'video' ? (
                                                            mediaSrc.includes('youtube') || mediaSrc.includes('youtu.be') ? (
                                                                <iframe
                                                                    src={mediaSrc.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/') + '?autoplay=1&mute=1'}
                                                                    className="w-full h-full object-cover pointer-events-none"
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                    title={mediaLabel}
                                                                />
                                                            ) : (
                                                                <video
                                                                    src={mediaSrc}
                                                                    className="w-full h-full object-cover"
                                                                    autoPlay
                                                                    muted
                                                                    loop
                                                                    playsInline
                                                                />
                                                            )
                                                        ) : (
                                                            /* Placeholder for stages with no real media yet */
                                                            <div className={`w-full h-full bg-gradient-to-br ${mediaColor || 'from-brand-dark to-gray-800'}`}>
                                                                <div className="absolute inset-0 flex items-center justify-center">
                                                                    <p className="text-brand-light/50 font-serif px-8 text-center">{mediaLabel}</p>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Media Label Overlay */}
                                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                                                            <p className="text-white/50 text-xs">
                                                                {currentIndex + 1} / {stage.media.length}
                                                            </p>
                                                            <div className="text-white/70 text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                                Click to expand
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Navigation arrows (Propagation stopped so they don't open lightbox) */}
                                                {stage.media.length > 1 && isHovered && (
                                                    <>
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); prevMedia(stageIndex); }}
                                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-sage-green text-white rounded-full p-2 transition-all z-20 backdrop-blur-md"
                                                        >
                                                            <ChevronLeft className="w-5 h-5" />
                                                        </button>
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); nextMedia(stageIndex); }}
                                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-sage-green text-white rounded-full p-2 transition-all z-20 backdrop-blur-md"
                                                        >
                                                            <ChevronRight className="w-5 h-5" />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox Overlay */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-[110]"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
                        {(() => {
                            const media = lightboxMedia[lightboxIndex];
                            if (!media) return null;

                            return (
                                <>
                                    {media.type === 'image' ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={media.src}
                                                alt={media.alt}
                                                fill
                                                className="object-contain"
                                                quality={90}
                                            />
                                        </div>
                                    ) : (
                                        <div className="relative w-full aspect-video max-h-full">
                                            {media.src.includes('youtube') || media.src.includes('youtu.be') ? (
                                                <iframe
                                                    src={media.src.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/') + '?autoplay=1'}
                                                    className="w-full h-full"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <video
                                                    src={media.src}
                                                    className="w-full h-full"
                                                    controls
                                                    autoPlay
                                                />
                                            )}
                                        </div>
                                    )}

                                    {/* Caption */}
                                    <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                                        <div className="inline-block bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">

                                            <p className="text-white/50 text-sm mt-1">{lightboxIndex + 1} / {lightboxMedia.length}</p>
                                        </div>
                                    </div>
                                </>
                            );
                        })()}

                        {/* Navigation */}
                        {lightboxMedia.length > 1 && (
                            <>
                                <button
                                    onClick={prevLightboxMedia}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    onClick={nextLightboxMedia}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FounderTimeline;
