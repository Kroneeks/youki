type VocabularyType = 'education' | 'entertainment' | 'news';

export interface VocabularyItem {
    kind?: string;
    videoId: string;
}

export interface Vocabulary {
    id: VocabularyItem;
    keyword: string;
    type: VocabularyType;
}

export interface VocabularySchema {
    data?: Vocabulary[];
    isLoading: boolean;
    error?: string;
}
