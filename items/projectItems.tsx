import { ProjectType } from "@/types/projecttype";

export const ProjectItems : ProjectType[] = [
    {
        title: "TripBucket",
        description: "Build your travel bucket list along with its itinerary. Proud of your itinerary, you can share it.",
        bannerImg: "/tripbucket.png",
        bannerClass: null,
        projectUrl: "https://tripbucket.vercel.app/" ,
        projectGithub: "https://github.com/Vinit-M420/TripBucket",
        linkColSpanEach: 2,
    },
    {
        title: "Wallp",
        description: "Sleek, frontend-only platform where users can discover and share stunning AI-generated wallpapers in a community hub.",
        bannerImg: "/wallp.png",
        bannerClass: "object-top",
        projectUrl: "https://wallp-frontend.vercel.app/" ,
        projectGithub: "https://github.com/Vinit-M420/wallp-AI-wallpaper-hub",
        linkColSpanEach: 2,
    },
    {
        title: "Reddit Data Pipeline",
        description: "A complete Data pipeline of Reddit using PRAW, Airflow and GCP.",
        bannerImg: "/redditarch.png",
        bannerClass: null,
        projectUrl: null,
        projectGithub: "https://github.com/Vinit-M420/reddit-data-pipeline-gcp",
        linkColSpanEach: 1,
    },
    {
        title: "Bookmark Manager",
        description: "Frontend only website built using Tailwind CSS",
        bannerImg: "/bookmark.png",
        bannerClass: null,
        projectUrl: "https://tailwindbookmark-vinit.vercel.app/" ,
        projectGithub: null,
        linkColSpanEach: 1,
    }
]
