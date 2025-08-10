import { createDraftSafeSelector } from "@reduxjs/toolkit";


const selectUser = (state: any) => state.user;
export const selectPackDetails = createDraftSafeSelector(
    selectUser,
    (state: any) => state.convalidato
);
