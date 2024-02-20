import { HStack } from '@/shared/ui/Stack';
import { RadioGroup as HRadioGroup } from '@headlessui/react';
import { type SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './RadioGroup.module.scss';

interface RadioGroupProps {
    items: string[];
    onChange: (item: string) => void;
}

export const RadioGroup = (props: RadioGroupProps) => {
    const { items, onChange } = props;
    const [value, setValue] = useState(items[0]);
    const { t } = useTranslation();

    const onChecked = (newValue: SetStateAction<string>) => {
        onChange(newValue as string);
        setValue(newValue);
    };

    if (items) {
        return (
            <HRadioGroup value={value} onChange={onChecked}>
                <HStack justify="center" gap="32">
                    {items.map((item) => (
                        <HRadioGroup.Option
                            key={item}
                            value={item}
                            className={cls.radioOption}
                        >
                            {({ checked }) => (
                                <HStack gap="8">
                                    <input
                                        type="radio"
                                        className={cls.input}
                                        checked={checked}
                                        onChange={() => {}}
                                    />
                                    {t(item)}
                                </HStack>
                            )}
                        </HRadioGroup.Option>
                    ))}
                </HStack>
            </HRadioGroup>
        );
    }

    return <></>;
};
