import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { AppDispatch } from './store';
import { rtkApi } from '@/shared/api/rtkApi';
import { VocabularySchema } from '@/entities/Vocabulary/model/types/vocabulary';

export interface StateSchema {
    vocabulary: VocabularySchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Async reducers
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

declare const $CombinedState: unique symbol;
interface EmptyObject {
    readonly [$CombinedState]?: undefined;
}
export type CombinedState<S> = EmptyObject & S;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    dispatch: AppDispatch;
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
