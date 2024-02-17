import { Flex, type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;

    return <Flex direction={'column'} align={align} {...props} />;
};

export { VStack };
