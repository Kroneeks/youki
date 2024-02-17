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

const MainPage = () => {
    const [value, setValue] = useState('');

    const onChange = (keyword: string) => {
        setValue(keyword);
    };

    const onClick = () => {
        console.log(1);
    };

    return (
        <>
            <StickyContentLayout
                content={
                    <Page className={cls.MainPage}>
                        <VStack gap="8" align="stretch">
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
                                        onClick={onClick}
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
                        </VStack>
                    </Page>
                }
            />
        </>
    );
};

export default MainPage;
