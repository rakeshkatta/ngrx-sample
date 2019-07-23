import {Action} from '@ngrx/store';
import {sample} from './../models/sample-model';
import * as SampleActions from './../actions/sample-actions'

const initialState: sample = {
    name: 'sample 1',
    url: 'www.google.com'
}

export function reducer(state: sample[] = [initialState]  , action: SampleActions.Actions) {
    switch (action.type) {
        case SampleActions.ADD_TUTORIAL:
            return [...state, action.payload ];
            break;
    
        default:
            return state;
            break;
    }
}