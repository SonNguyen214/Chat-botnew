import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ConversationState {
  conversationId: string | null;
  loading: boolean;
  error: boolean;
}

const initialState: ConversationState = {
  conversationId: null,
  loading: false,
  error: false,
};
const conversationSlice = createSlice({
  name: "conversation",
  initialState: initialState,
  reducers: {
    setConversationId: (state, action: PayloadAction<string>) => {
      state.conversationId = action.payload;
    },
  },
  // extraReducers: (builder) => {},
});

export const { setConversationId } = conversationSlice.actions;
export default conversationSlice.reducer;
