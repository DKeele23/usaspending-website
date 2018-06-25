import { initialState } from 'redux/reducers/recipient/recipientSummaryReducer';

export const mockActions = {
    setRecipientOverview: jest.fn(),
    setRecipientFiscalYear: jest.fn()
};

export const mockRedux = {
    params: {
        recipientId: '123456'
    },
    recipient: initialState
};
