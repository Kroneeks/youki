import { AppLink } from '@/shared/ui/AppLink';

const MainPage = () => {
    return (
        <>
            <div>Главная страница</div>
            <AppLink to={'/youtube/charger'}>Поиск</AppLink>
        </>
    );
};

export default MainPage;
