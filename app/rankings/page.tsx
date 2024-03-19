'use client'
import './Rankings.css'
import TextH1 from '@/components/TextH1/TextH1';
import TextP from '@/components/TextP/TextP';
import RankingsRow from '@/components/RankingsRow/RankingsRow';
import { useState, useEffect } from "react";
import { useUnit } from "effector-react";
import { $rankings, $thisWeek, $thisMonth, $allTime } from "@/stores/searchStore";

const Rankings = () => {
    const today_btn = document.getElementById('today')
    const thisWeek_btn = document.getElementById('thisWeek')
    const thisMonth_btn = document.getElementById('thisMonth')
    const allTime_btn = document.getElementById('allTime')

    const [data, setData] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);

    const StoreNft = useUnit({
        storeRankings: $rankings,
        storeThisWeek: $thisWeek,
        storeThisMonth: $thisMonth,
        storeAllTime: $allTime
    })

    useEffect(() => {
        setData(StoreNft.storeRankings);
        setDataFilter(StoreNft.storeRankings)
    }, []);

    const today_click = () => {
        setData(StoreNft.storeRankings);
        setDataFilter(StoreNft.storeRankings)
        today_btn.classList.add('active')
        thisWeek_btn.classList.remove('active')
        thisMonth_btn.classList.remove('active')
        allTime_btn.classList.remove('active')
    }

    const thisWeek_click = () => {
        setData(StoreNft.storeThisWeek);
        setDataFilter(StoreNft.storeThisWeek)
        thisWeek_btn.classList.add('active')
        today_btn.classList.remove('active')
        thisMonth_btn.classList.remove('active')
        allTime_btn.classList.remove('active')
    }

    const thisMonth_click = () => {
        setData(StoreNft.storeThisMonth);
        setDataFilter(StoreNft.storeThisMonth)
        thisMonth_btn.classList.add('active')
        thisWeek_btn.classList.remove('active')
        today_btn.classList.remove('active')
        allTime_btn.classList.remove('active')
    }

    const allTime_click = () => {
        setData(StoreNft.storeAllTime);
        setDataFilter(StoreNft.storeAllTime)
        allTime_btn.classList.add('active')
        thisWeek_btn.classList.remove('active')
        today_btn.classList.remove('active')
        thisMonth_btn.classList.remove('active')
    }

    return (
        <div className='rankingsSection'>
            <div style={{width:'1280px', display: 'block', margin: '0 auto', padding: '80px 115px', color: 'white'}}>
                <TextH1 style={{fontWeight:'600', fontSize: '51px', marginBottom: '20px'}}>Top Creators</TextH1>
                <TextP style={{fontSize: '22px'}}>Check out top ranking NFT artists on the NFT Marketplace.</TextP>
            </div>
            <div style={{width:'1280px', display: 'block', margin: '0 auto', padding: '0 115px'}}>
                <div className="btns">
                    <button id="today" onClick={today_click} className="active">Today</button>
                    <button id="thisWeek" onClick={thisWeek_click}>This Week</button>
                    <button id="thisMonth" onClick={thisMonth_click}>This Month</button>
                    <button id="allTime" onClick={allTime_click}>All Time</button>
                </div>
            </div>
            <div style={{width:'1280px', display: 'block', margin: '0 auto', padding: '40px 115px'}}>
                <div style={{marginBottom: '20px', fontSize: '16px', paddingLeft: '20px', color: '#858584', display: 'flex', alignItems: 'center', width: '1050px', height: '46px', backgroundColor: 'inherit', borderRadius: '20px', border: '1px solid #3B3B3B', fontFamily: '"Space Mono", monospace'}}>
                    <p style={{width: '30px', textAlign: 'center', marginRight: '20px'}}>#</p>
                    <p style={{ marginRight: '381px'}}>Artist</p>
                    <p style={{width: '160px', marginRight: '20px'}}>Change</p>
                    <p style={{width: '160px', marginRight: '20px'}}>NFTs Sold</p>
                    <p style={{width: '160px', marginRight: '20px'}}>Volume</p>
                </div>
                <div className="rows">
                    {dataFilter &&
                        dataFilter.map((item) =>(
                            <RankingsRow
                                artist={item.artist}
                                src={item.photo}
                                id={item.id}
                            />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

export default Rankings;