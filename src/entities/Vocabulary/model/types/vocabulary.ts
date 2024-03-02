type VocabularyType = 'education' | 'entertainment' | 'news';

export interface VocabularyItem {
    kind?: string;
    videoId: string;
}

export interface VocabularySnippet {
    title: string;
}

export interface Vocabulary {
    id: VocabularyItem;
    keyword: string;
    type: VocabularyType;
    snippet: VocabularySnippet;
}

export interface VocabularySchema {
    data?: Vocabulary[];
    isLoading: boolean;
    error?: string;
    checked: number;
}
