export type Conference = {
    title: string;
    description: string;
    date: string;
    location: string;
    venue: string;
    startDate: string;
    endDate: string;
    talkCount: number;
    speakerCount: number;
    days: Day[];
}

export type Day = {
    title: string;
    description: string;
    date: string;
    talks: Talk[];
    speakers: Speaker[];
}

export type Talk = {
    title: string;
    speaker: Speaker;
    time: string;
}

export type Speaker = {
    title: string;
    name: string;
    imageUrl: string;
}