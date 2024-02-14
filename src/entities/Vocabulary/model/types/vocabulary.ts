type VocabularyType = 'education' | 'entertainment' | 'news';

export interface Vocabulary {
    id: string;
    keyword: string;
    type: VocabularyType;
}

export interface VocabularySchema {
    data?: Vocabulary[];
    isLoading: boolean;
    error?: string;
}
