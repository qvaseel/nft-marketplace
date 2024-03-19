'use client'
import "./Marketplace.css"
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";
import DiscoverCard from "@/components/DiscoverCard/DiscoverCard";
import { useState, useEffect } from "react";
import { useUnit } from "effector-react";
import { $nfts, $collections } from "@/stores/searchStore";

const Marketplace = () => {
    const nft_btn = document.getElementById('nft')
    const collect_btn = document.getElementById('collect')

    const [data, setData] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);

    const StoreNft = useUnit({
        storeNFT: $nfts,
        storeCollections: $collections
    })

    useEffect(() => {
        setData(StoreNft.storeNFT);
        setDataFilter(StoreNft.storeNFT)
    }, []);

    const search = async (query) => {
        if (!query) {
            data;
        }
        return data.filter((data) => data.cardName.includes(query));
    }

    const handleChange = async (e) => {
        const newList = await search(e.target.value);
        setDataFilter(newList);
    }

    const nft_click = () => {
        setData(StoreNft.storeNFT);
        setDataFilter(StoreNft.storeNFT);
        nft_btn.classList.add('active')
        collect_btn.classList.remove('active')
    }

    const collect_click = () => {
        setData(StoreNft.storeCollections);
        setDataFilter(StoreNft.storeCollections);
        nft_btn.classList.remove('active')
        collect_btn.classList.add('active')
    }

    return (
        <div className="browseMarketplaceSection">
            <div style={{width:'1280px', display: 'block', margin: '0 auto', padding: '80px 115px', color: 'white'}}>
                <TextH1 style={{fontWeight:'600', fontSize: '51px', marginBottom: '10px'}}>Browse Marketplace</TextH1>
                <TextP style={{fontSize: '22px', marginBottom: '30px'}}>Browse through more than 50k NFTs on the NFT Marketplace.</TextP>
                <input onChange={handleChange} type="text" className="searchInput" placeholder="Search your favourite NFTs"/>
            </div>
            <div style={{width: 'auto', borderTop: '1px solid #3B3B3B', borderBottom: '2px solid #2B2B2B'}}>
                <div style={{width:'1280px', display: 'block', margin: '0 auto', padding: '0 115px'}}>
                    <div className="btns">
                        <button id="nft"  className="active" onClick={nft_click}>NFTs<span>302</span></button>
                        <button id="collect" onClick={collect_click}>Collections<span>67</span></button>
                    </div>
                    
                </div>
                <div style={{backgroundColor: '#3B3B3B', color: 'white'}}>
                    <div className="market_cards" >
                            {dataFilter &&
                                dataFilter.map((item) =>(
                                    <DiscoverCard
                                        srcPhoto={item.photo}
                                        postText={item.cardName}
                                        srcIcon={item.icon}
                                        userText={item.iconName}
                                        className="market"
                                    />
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketplace;