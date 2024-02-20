import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { AppLink } from '@/shared/ui/AppLink';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useState } from 'react';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Page } from '@/widgets/Page';
import cls from './MainPage.module.scss';
import { Button } from '@/shared/ui/Button';
import { CategorySelect } from '@/entities/Category/ui/CategorySelect';

const MainPage = () => {
    const [value, setValue] = useState('');
    const [header, setHeader] = useState('Follow your dreams');

    const onChange = (keyword: string) => {
        setValue(keyword);
    };

    return (
        <>
            <StickyContentLayout
                content={
                    <Page className={cls.MainPage}>
                        <VStack gap="64" align="stretch">
                            <AppLink
                                to={`/youtube/${header}`}
                                className={cls.header}
                            >
                                <h3>{header}</h3>
                            </AppLink>
                            <VStack gap="16" align="stretch">
                                <HStack gap="16">
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                        size="m"
                                    />
                                    <AppLink
                                        to={`/youtube/${value}`}
                                        className={cls.searchLink}
                                    >
                                        <Button
                                            className={cls.searchBtn}
                                            radius="smRadius"
                                            variant="filled"
                                        >
                                            <Icon
                                                Svg={SearchIcon}
                                                width="20px"
                                                height="20px"
                                                variant="inverted"
                                            />
                                        </Button>
                                    </AppLink>
                                </HStack>
                                <CategorySelect />
                            </VStack>
                        </VStack>
                    </Page>
                }
            />
        </>
    );
};

export default MainPage;
