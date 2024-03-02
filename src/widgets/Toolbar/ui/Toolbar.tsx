import { VStack } from '@/shared/ui/Stack';
import { memo } from 'react';
import cls from './Toolbar.module.scss';
import HomeIcon from '@/shared/assets/icons/home.svg';
import { Icon } from '@/shared/ui/Icon';
import { AppLink } from '@/shared/ui/AppLink';

const Toolbar = memo(() => {
    return (
        <VStack className={cls.Toolbar} align="center">
            <AppLink to={'/'} className={cls.Home}>
                <Icon Svg={HomeIcon} />
            </AppLink>
        </VStack>
    );
});

Toolbar.displayName = 'Toolbar';

export { Toolbar };
