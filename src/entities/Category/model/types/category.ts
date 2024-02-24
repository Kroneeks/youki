export enum Category {
    Education = 'education',
    Entertainment = 'entertainment',
    Blogs = 'people & blogs',
    Science = 'science & technology',
    News = 'news & politics',
}

export const mapCategoriesToId: Record<Category, string> = {
    education: '27',
    entertainment: '24',
    'news & politics': '25',
    'people & blogs': '22',
    'science & technology': '28',
};

export interface CategorySchema {
    category: string;
}
