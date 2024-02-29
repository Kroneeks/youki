import { VocabularySidebarDetails } from '@/entities/Vocabulary/ui/VocabularySidebarDetails/VocabularySidebarDetails';
import { VStack } from '@/shared/ui/Stack';
import { memo } from 'react';

const Sidebar = memo(() => {
    return (
        <VStack>
            <VocabularySidebarDetails />
        </VStack>
    );
});

Sidebar.displayName = 'Sidebar';

export { Sidebar };
