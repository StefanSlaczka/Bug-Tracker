export interface IBug {
    id: string;
    description: string;
    priority: BugPriority,
}

// This is discribing the different types of prioity
export enum BugPriority {
    HIGH = 'High',
    MEDIUM = 'Medium',
    LOW = 'Low',
}