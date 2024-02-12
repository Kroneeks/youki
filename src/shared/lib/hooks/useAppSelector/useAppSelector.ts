import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import { type AppState } from '@/app/providers/StoreProvider/config/store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
