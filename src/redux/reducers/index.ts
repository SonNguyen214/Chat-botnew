import { combineReducers } from "@reduxjs/toolkit";
import ConversationReducer from "./Conversation";

export const rootReducer = combineReducers({
  conversation: ConversationReducer,
});
