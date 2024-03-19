'use client'
import {createStore, createEffect} from "effector";

import nft from "./imageMarketplace"
import collections from "./imageCollections"
import rankings from "./imageRankings"
import thisWeek from "./ImageRankThisWeek"
import thisMonth from "./imageRankThisMonth"
import allTime from "./imageRankAllTime"

export const $nfts = createStore([]);
export const $collections = createStore([]);
export const $rankings = createStore([]);
export const $thisWeek = createStore([]);
export const $thisMonth = createStore([]);
export const $allTime = createStore([]);

export const getNft = createEffect(async () => {
    try {
        const response = await nft;
        return response;
    } catch (error) {
        throw error;
    }
});

export const getCollect = createEffect(async () => {
    try {
        const response = await collections;
        return response;
    } catch (error) {
        throw error;
    }
});

export const getRanking = createEffect(async () => {
    try {
        const response = await rankings;
        return response;
    } catch (error) {
        throw error;
    }
});

export const getThisWeek = createEffect(async () => {
    try {
        const response = await thisWeek;
        return response;
    } catch (error) {
        throw error;
    }
});

export const getThisMonth = createEffect(async () => {
    try {
        const response = await thisMonth;
        return response;
    } catch (error) {
        throw error;
    }
});

export const getAllTime = createEffect(async () => {
    try {
        const response = await allTime;
        return response;
    } catch (error) {
        throw error;
    }
});

$nfts.on(getNft.doneData, (state, data) => data);
$collections.on(getCollect.doneData, (state, data) => data);
$rankings.on(getRanking.doneData, (state, data) => data);
$thisWeek.on(getThisWeek.doneData, (state, data) => data);
$thisMonth.on(getThisMonth.doneData, (state, data) => data);
$allTime.on(getAllTime.doneData, (state, data) => data)

getNft();
getCollect();
getRanking();
getThisWeek();
getThisMonth();
getAllTime();