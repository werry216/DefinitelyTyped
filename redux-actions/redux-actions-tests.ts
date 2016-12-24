import ReduxActions = require("redux-actions");

let state: number;
const minimalAction: ReduxActions.BaseAction = { type: 'INCREMENT' };

const incrementAction: () => ReduxActions.Action<number> = ReduxActions.createAction<number>(
    'INCREMENT', () => 1
);

const multiplyAction: (...args: number[]) => ReduxActions.Action<number> = ReduxActions.createAction<number>(
    'MULTIPLY'
);

const action: ReduxActions.Action<number> = incrementAction();

const actionHandler = ReduxActions.handleAction<number, number>(
    'INCREMENT',
    (state: number, action: ReduxActions.Action<number>) => state + action.payload
);

state = actionHandler(0, incrementAction());

const actionHandlerWithReduceMap = ReduxActions.handleAction<number, number>(
    'MULTIPLY', {
        next(state: number, action: ReduxActions.Action<number>) {
            return state * action.payload;
        },
        throw(state: number) { return state }
    }
);

state = actionHandlerWithReduceMap(0, multiplyAction(10));

const actionsHandler = ReduxActions.handleActions<number, number>({
    'INCREMENT': (state: number, action: ReduxActions.Action<number>) => state + action.payload,
    'MULTIPLY': (state: number, action: ReduxActions.Action<number>) => state * action.payload
});

state = actionsHandler(0, { type: 'INCREMENT' });

const actionsHandlerWithInitialState = ReduxActions.handleActions<number, number>({
    'INCREMENT': (state: number, action: ReduxActions.Action<number>) => state + action.payload,
    'MULTIPLY': (state: number, action: ReduxActions.Action<number>) => state * action.payload
}, 0);

state = actionsHandlerWithInitialState(0, { type: 'INCREMENT' });

// ----------------------------------------------------------------------------------------------------

type TypedState = {
    value: number;
};

type TypedPayload = {
    increase: number;
}

type MetaType = {
    remote: boolean
};

let typedState: TypedState;

const richerAction: ReduxActions.ActionMeta<TypedState, MetaType> = {
    type: 'INCREMENT',
    error: false,
    payload: {
        value: 2
    },
    meta: {
        remote: true
    }
};

const typedIncrementAction: () => ReduxActions.Action<TypedPayload> = ReduxActions.createAction<TypedPayload>(
    'INCREMENT',
    () => ({ increase: 1 })
);

const typedActionHandler = ReduxActions.handleAction<TypedState, TypedPayload>(
    'INCREMENT',
    (state: TypedState, action: ReduxActions.Action<TypedPayload>) => ({ value: state.value + 1 })
);

typedState = typedActionHandler({ value: 0 }, typedIncrementAction());

const typedIncrementByActionWithMeta: (value: number) => ReduxActions.ActionMeta<TypedPayload, MetaType> =
    ReduxActions.createAction<TypedPayload, MetaType>(
    'INCREMENT_BY',
        amount => ({ increase: amount }),
        amount => ({ remote: true })
    );

const typedActionHandlerWithReduceMap = ReduxActions.handleAction<TypedState, TypedPayload>(
    'INCREMENT_BY', {
        next(state: TypedState, action: ReduxActions.Action<TypedPayload>) {
            return { value: state.value + action.payload.increase };
        },
        throw(state: TypedState) { return state }
    }
);

typedState = typedActionHandlerWithReduceMap({ value: 0 }, typedIncrementByActionWithMeta(10));

const act = ReduxActions.createAction<string>('ACTION1')
act('hello').payload === 'hello'

const act2 = ReduxActions.createAction('ACTION2', (s: {load: boolean}) => s)
act2({load: true}).payload.load == true

const act3 = ReduxActions.createAction('ACTION3', (s: string) => ({s}))
act3('hello').payload.s == 'hello'

ReduxActions.handleAction<{ hello: string }, string>(act, (state, action) => {
    return { hello: action.payload }
})

ReduxActions.handleAction<{ hello: { load: boolean } }, { load: boolean }>(act2, (state, action) => {
    return { hello: action.payload }
})

ReduxActions.handleAction(act3, (state, action) => {
    return { hello: action.payload.s }
})

/* can't do this until it lands in 2.2
ReduxActions.handleAction(act, (state, action) => {
    action.payload === 'hello'
    return {}
})

ReduxActions.handleAction(act2, (state, action) => {
    action.payload.load === true
    return {}
})

ReduxActions.handleAction(act3, (state, action) => {
    action.payload.s == 'hello'
    return {}
})*/
